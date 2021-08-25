import { Injectable } from '@nestjs/common';
import * as OAuthClient from 'intuit-oauth';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { QuickBooksConfigService } from '../../config/services/quickbooks-config.service';
import { QuickBooksStore } from '../../store';
import { QuickbooksModes } from '../../config';
import { TokensModel } from '..';
import { HttpService } from '@nestjs/axios';
import { QuickBooksAuthorisationError } from 'lib/utils/errors/quick-books-authorisation.error';

@Injectable()
export class QuickBooksAuthService {
  private readonly client;

  constructor(
    private readonly httpClient: HttpService,
    private readonly configService: QuickBooksConfigService,
    private readonly tokenStore: QuickBooksStore,
  ) {
    this.client = new OAuthClient({
      clientId: this.configService.global.clientId,
      clientSecret: this.configService.global.clientSecret,
      environment: this.configService.global.mode,
      redirectUri: this.configService.global.authRedirectUrl,
    });
  }

  public get mode(): QuickbooksModes {
    return this.configService.global.mode;
  }

  public async disconnect(realm?: string): Promise<void> {
    if (!realm) {
      realm = await this.tokenStore.getDefaultCompany();
    }

    const token = await this.tokenStore.getToken(realm);
    return this.client.revoke().then((authResponse) => {
      this.tokenStore.unregisterCompany(token.realmId);
      this.tokenStore.unsetToken(token.realmId);
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
    await this.tokenStore.registerCompany(token.realmId);
    await this.tokenStore.setToken(token.realmId, token);
  }

  public getToken(realm: string): Observable<string> {
    return from(this.tokenStore.getToken(realm))
      .pipe(
        mergeMap((token) => {
          if (!token) {
            return of(null);
          }

          if (this.validateToken(token)) {
            return of(token.access_token);
          }

          return this.refreshAccessToken(realm, token);
        }),
      )
      .pipe(
        map((value) => {
          if (!value) {
            throw new QuickBooksAuthorisationError();
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

  private refreshAccessToken(
    realm: string,
    token: TokensModel,
  ): Observable<string> {
    return from(this.client.refreshUsingToken(token.refresh_token)).pipe(
      map(() => {
        const newToken = this.client.getToken().getToken();
        this.tokenStore.setToken(realm, newToken);
        return newToken.access_token;
      }),
    );
  }
}
