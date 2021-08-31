import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { TokensModel, NestJsQuickBooksStore } from 'lib';

@Injectable()
export class QbStoreService implements NestJsQuickBooksStore {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  public async setToken(token: TokensModel): Promise<void> {
    await this.cacheManager.set('qb_token', token, {
      ttl: token.x_refresh_token_expires_in,
    });
  }

  public async getToken(): Promise<TokensModel> {
    return this.cacheManager.get('qb_token');
  }

  public async unsetToken(): Promise<void> {
    await this.cacheManager.del('qb_token');
  }
}
