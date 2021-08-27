import { Module } from '@nestjs/common';
import { NestJsQuickBooksPurchaseService } from './services/purchase.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksPurchaseService],
  exports: [NestJsQuickBooksPurchaseService],
})
export class NestJsQuickBooksPurchaseModule {}
