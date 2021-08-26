import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksCustomersService } from './services/customers.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksCustomersService],
  exports: [NestJsQuickBooksCustomersService],
})
export class NestJsQuickBooksCustomersModule {}
