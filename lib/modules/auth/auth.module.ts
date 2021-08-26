import { Module } from '@nestjs/common';
import { NestJsQuickBooksAuthService } from './services/auth.service';
import { ConfigModule } from '../config/config.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [NestJsQuickBooksAuthService],
  exports: [NestJsQuickBooksAuthService],
})
export class NestJsQuickBooksAuthModule {}
