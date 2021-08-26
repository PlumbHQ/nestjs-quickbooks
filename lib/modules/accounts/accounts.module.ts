import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksAccountsService } from './services/accounts.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksAccountsService],
  exports: [NestJsQuickBooksAccountsService],
})
export class NestJsQuickBooksAccountsModule {}
