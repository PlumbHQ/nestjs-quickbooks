import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksCompanyInfoService } from './services/company-info.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksCompanyInfoService],
  exports: [NestJsQuickBooksCompanyInfoService],
})
export class NestJsQuickBooksCompanyInfoModule {}
