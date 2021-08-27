import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksBillService } from './services/bill.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksBillService],
  exports: [NestJsQuickBooksBillService],
})
export class NestJsQuickBooksBillModule {}
