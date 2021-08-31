import { Module } from '@nestjs/common';
import { NestJsQuickBooksVendorCreditService } from './services/vendor-credit.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksVendorCreditService],
  exports: [NestJsQuickBooksVendorCreditService],
})
export class NestJsQuickBooksVendorCreditModule {}
