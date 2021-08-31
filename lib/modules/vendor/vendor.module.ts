import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksVendorService } from './services/vendor.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksVendorService],
  exports: [NestJsQuickBooksVendorService],
})
export class NestJsQuickBooksVendorModule {}
