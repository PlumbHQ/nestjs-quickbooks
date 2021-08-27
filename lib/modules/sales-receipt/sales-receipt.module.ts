import { Module } from '@nestjs/common';
import { NestJsQuickBooksSalesReceiptService } from './services/sales-receipt.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksSalesReceiptService],
  exports: [NestJsQuickBooksSalesReceiptService],
})
export class NestJsQuickBooksSalesReceiptModule {}
