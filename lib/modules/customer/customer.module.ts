import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksCustomerService } from './services/customer.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksCustomerService],
  exports: [NestJsQuickBooksCustomerService],
})
export class NestJsQuickBooksCustomerModule {}
