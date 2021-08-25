import { Module } from '@nestjs/common';
import { PurchasesService } from './services/purchases.service';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [PurchasesService],
  exports: [PurchasesService],
})
export class QuickBooksPurchasesModule {}
