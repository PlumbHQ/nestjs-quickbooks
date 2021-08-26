import { Module } from '@nestjs/common';
import { NestJsQuickBooksConfigService } from './services/quickbooks-config.service';

@Module({
  providers: [NestJsQuickBooksConfigService],
  exports: [NestJsQuickBooksConfigService],
})
export class ConfigModule {}
