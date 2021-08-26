import { NestJsQuickBooksStore } from './store.service';
import { Injectable } from '@nestjs/common';
import { TokensModel } from '../auth/models/tokens.model';

@Injectable()
export class LocalStore extends NestJsQuickBooksStore {
  token: TokensModel;

  public async getToken(): Promise<TokensModel> {
    return this.token;
  }

  public async setToken(token: TokensModel): Promise<void> {
    this.token = token;
  }

  public async unsetToken(): Promise<void> {
    this.token = null;
  }
}
