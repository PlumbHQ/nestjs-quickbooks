import { Module } from '@nestjs/common';
import { NestJsQuickBooksVendorCreditsService } from './services/vendor-credits.service';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksVendorCreditsService],
  exports: [NestJsQuickBooksVendorCreditsService],
})
export class NestJsQuickBooksVendorCreditsModule {}
