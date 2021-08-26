import { Inject, Injectable } from '@nestjs/common';
import { NestJsQuickbooksConfigAuthModel } from '../models/quickbooks-config-auth.model';
import { NestJsQuickBooksConfigModel } from '../models/quickbooks-config.model';
import { NESTJS_QUICK_BOOKS_CONFIG } from '../../../constants';

@Injectable()
export class NestJsQuickBooksConfigService {
  public readonly auth: NestJsQuickbooksConfigAuthModel;

  constructor(
    @Inject(NESTJS_QUICK_BOOKS_CONFIG)
    public readonly global: NestJsQuickBooksConfigModel,
  ) {
    this.auth = new NestJsQuickbooksConfigAuthModel();
  }
}
