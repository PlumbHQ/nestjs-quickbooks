import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';
import { NestJsQuickBooksTaxRateService } from './services/tax-rate.service';

@Module({
  imports: [NestJsQuickBooksAuthModule, ConfigModule, HttpModule],
  providers: [NestJsQuickBooksTaxRateService],
  exports: [NestJsQuickBooksTaxRateService],
})
export class NestJsQuickBooksTaxRateModule {}
