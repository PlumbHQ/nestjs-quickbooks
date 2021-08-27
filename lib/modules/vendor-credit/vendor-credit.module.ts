import { Module } from '@nestjs/common';
import { NestJsQuickBooksVendorCreditService } from './services/vendor-credit.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksVendorCreditService],
  exports: [NestJsQuickBooksVendorCreditService],
})
export class NestJsQuickBooksVendorCreditModule {}
