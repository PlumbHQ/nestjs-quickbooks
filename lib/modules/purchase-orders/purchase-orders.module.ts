import { Module } from '@nestjs/common';
import { NestJsQuickBooksPurchaseOrdersService } from './services/purchase-orders.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksPurchaseOrdersService],
  exports: [NestJsQuickBooksPurchaseOrdersService],
})
export class NestJsQuickBooksPurchaseOrdersModule {}
