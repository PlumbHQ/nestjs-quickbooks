import { Module } from '@nestjs/common';
import { NestJsQuickBooksPurchaseService } from './services/purchase.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksPurchaseService],
  exports: [NestJsQuickBooksPurchaseService],
})
export class NestJsQuickBooksPurchaseModule {}
