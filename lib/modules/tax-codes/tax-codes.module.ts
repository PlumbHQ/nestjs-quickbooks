import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAuthModule } from '../auth/auth.module';
import { QuickBooksTaxCodesService } from './services/tax-codes.service';

@Module({
  imports: [QuickBooksAuthModule, HttpModule],
  providers: [QuickBooksTaxCodesService],
  exports: [QuickBooksTaxCodesService],
})
export class QuickBooksTaxCodesModule {}
