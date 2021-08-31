import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';
import { NestJsQuickBooksBillService } from './services/bill.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksBillService],
  exports: [NestJsQuickBooksBillService],
})
export class NestJsQuickBooksBillModule {}
