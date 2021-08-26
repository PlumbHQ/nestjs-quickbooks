import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksVendorsService } from './services/vendors.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksVendorsService],
  exports: [NestJsQuickBooksVendorsService],
})
export class NestJsQuickBooksVendorsModule {}
