import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';
import { QuickBooksVendorsService } from './services/vendors.service';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [QuickBooksVendorsService],
  exports: [QuickBooksVendorsService],
})
export class QuickBooksVendorsModule {}
