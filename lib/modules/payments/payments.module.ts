import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';
import { QuickBooksPaymentsService } from './services/payments.service';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [QuickBooksPaymentsService],
  exports: [QuickBooksPaymentsService],
})
export class QuickBooksPaymentsModule {}
