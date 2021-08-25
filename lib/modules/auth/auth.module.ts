import { Module } from '@nestjs/common';
import { QuickBooksAuthService } from './services/auth.service';
import { ConfigModule } from '../config/config.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [QuickBooksAuthService],
  exports: [QuickBooksAuthService],
})
export class QuickBooksAuthModule {}
