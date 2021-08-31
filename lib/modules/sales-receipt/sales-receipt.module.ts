import { Module } from '@nestjs/common';
import { NestJsQuickBooksSalesReceiptService } from './services/sales-receipt.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksSalesReceiptService],
  exports: [NestJsQuickBooksSalesReceiptService],
})
export class NestJsQuickBooksSalesReceiptModule {}
