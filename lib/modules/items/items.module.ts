import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { NestJsNestJsQuickBooksItemsService } from './services/items.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, HttpModule],
  providers: [NestJsNestJsQuickBooksItemsService],
  exports: [NestJsNestJsQuickBooksItemsService],
})
export class NestJsQuickBooksItemsModule {}
