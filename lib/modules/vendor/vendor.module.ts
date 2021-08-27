import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksVendorService } from './services/vendor.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksVendorService],
  exports: [NestJsQuickBooksVendorService],
})
export class NestJsQuickBooksVendorModule {}
