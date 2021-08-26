import { Module } from '@nestjs/common';
import { NestJsQuickBooksPurchasesService } from './services/purchases.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksPurchasesService],
  exports: [NestJsQuickBooksPurchasesService],
})
export class NestJsQuickBooksPurchasesModule {}
