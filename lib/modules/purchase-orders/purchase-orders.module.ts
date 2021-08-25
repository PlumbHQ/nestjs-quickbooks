import { Module } from '@nestjs/common';
import { PurchaseOrdersService } from './services/purchase-orders.service';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [PurchaseOrdersService],
  exports: [PurchaseOrdersService],
})
export class QuickBooksPurchaseOrdersModule {}
