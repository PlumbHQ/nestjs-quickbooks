import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';
import { QuickBooksCompanyInfoService } from './services/company-info.service';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [QuickBooksCompanyInfoService],
  exports: [QuickBooksCompanyInfoService],
})
export class QuickBooksCompanyInfoModule {}
