import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksBillsService } from './services/bills.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksBillsService],
  exports: [NestJsQuickBooksBillsService],
})
export class NestJsQuickBooksBillsModule {}
