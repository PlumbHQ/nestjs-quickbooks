import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsQuickBooksItemService } from './services/item.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsQuickBooksItemService],
  exports: [NestJsQuickBooksItemService],
})
export class NestJsQuickBooksItemModule {}
