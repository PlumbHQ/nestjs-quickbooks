import { Module } from '@nestjs/common';
import { SalesReceiptsService } from './services/sales-receipts.service';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [SalesReceiptsService],
  exports: [SalesReceiptsService],
})
export class QuickBooksSalesReceiptsModule {}
