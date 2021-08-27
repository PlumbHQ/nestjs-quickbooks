import { Module } from '@nestjs/common';
import { NestJsQuickBooksPurchaseOrderService } from './services/purchase-order.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksPurchaseOrderService],
  exports: [NestJsQuickBooksPurchaseOrderService],
})
export class NestJsQuickBooksPurchaseOrderModule {}
