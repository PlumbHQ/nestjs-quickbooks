import { Injectable } from '@nestjs/common';
import { TokensModel } from '../auth/models/tokens.model';

@Injectable()
export abstract class QuickBooksStore {
  public abstract setToken(token: TokensModel): Promise<void>;
  public abstract getToken(): Promise<TokensModel>;
  public abstract unsetToken(): Promise<void>;
}
