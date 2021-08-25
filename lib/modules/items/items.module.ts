import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';
import { QuickBooksItemsService } from './services/items.service';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [QuickBooksItemsService],
  exports: [QuickBooksItemsService],
})
export class QuickBooksItemsModule {}
