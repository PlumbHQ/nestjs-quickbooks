import { Module } from '@nestjs/common';
import { VendorCreditsService } from './services/vendor-credits.service';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [VendorCreditsService],
  exports: [VendorCreditsService],
})
export class QuickBooksVendorCreditsModule {}
