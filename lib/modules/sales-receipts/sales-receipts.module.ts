import { Module } from '@nestjs/common';
import { NestJsQuickBooksSalesReceiptsService } from './services/sales-receipts.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksSalesReceiptsService],
  exports: [NestJsQuickBooksSalesReceiptsService],
})
export class NestJsQuickBooksSalesReceiptsModule {}
