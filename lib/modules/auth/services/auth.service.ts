import { Injectable } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TokensModel } from '..';
import { NestJsQuickBooksConfigService } from '../../config/services/quickbooks-config.service';
import { NestJsQuickbooksModes } from '../../config';
import { NestJsQuickBooksAuthorisationError } from 'lib/utils/errors/quick-books-authorisation.error';
import * as OAuthClient from 'intuit-oauth';

@Injectable()
export class NestJsQuickBooksAuthService {
  private readonly client: OAuthClient;

  constructor(private readonly configService: NestJsQuickBooksConfigService) {
    this.client = new OAuthClient({
      clientId: this.configService.global.clientId,
      clientSecret: this.configService.global.clientSecret,
      environment: this.configService.global.mode,
      redirectUri: this.configService.global.authRedirectUrl,
    });
  }

  public get mode(): NestJsQuickbooksModes {
    return this.configService.global.mode;
  }

  public async disconnect(): Promise<void> {
    return this.client.revoke().then(async (authResponse) => {
      await this.configService.global.store.unsetToken();
      // await this.tokenStore.unsetToken();
    });
  }

  public getAuthorizeUri(): string {
    return this.client.authorizeUri({
      scope: this.configService.global.scopes,
      state: 'nestjs-client-state',
    });
  }

  public async authorizeCode(url: string): Promise<void> {
    await this.client.createToken(url);
    const token = this.client.getToken().getToken();
    await this.configService.global.store.setToken(token);
    // await this.tokenStore.setToken(token);
  }

  public getToken(): Observable<string> {
    return from(this.configService.global.store.getToken())
      .pipe(
        mergeMap((token) => {
          if (!token) {
            return of(null);
          }

          if (this.validateToken(token)) {
            return of(token.access_token);
          }

          return this.refreshAccessToken(token);
        }),
      )
      .pipe(
        map((value) => {
          if (!value) {
            throw new NestJsQuickBooksAuthorisationError();
          }

          return value;
        }),
      );
  }

  private validateToken(token: TokensModel): boolean {
    if (!token) {
      return false;
    }

    this.client.setToken(token);
    return this.client.isAccessTokenValid();
  }

  private refreshAccessToken(token: TokensModel): Observable<string> {
    return from(this.client.refreshUsingToken(token.refresh_token)).pipe(
      map(() => {
        const newToken = this.client.getToken().getToken();
        from(this.configService.global.store.setToken(newToken));
        // this.tokenStore.setToken(newToken);
        return newToken.access_token;
      }),
    );
  }
}
