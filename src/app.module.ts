import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  NestJsQuickBooksModule,
  NestJsQuickBooksOptions,
  NestJsQuickBooksScopes,
  NestJsQuickBooksStore,
} from 'lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { AuthController } from './auth/auth.controller';
import { ItemsController } from './items/items.controller';
import { CacheModule } from './cache/cache.module';
import { QbStoreService } from './cache/qb-store/qb-store.service';
import { BillsController } from './bills/bills.controller';
import { PurchasesController } from './purchases/purchases.controller';
import { SalesRecieptsController } from './sales-receipts/sales-receipts.controller';
import { VendorsController } from './vendors/vendors.controller';
import { VendorCreditsController } from './vendor-credits/vendor-credits.controller';

@Module({
  imports: [
    CacheModule,
    ConfigModule.forRoot(),
    NestJsQuickBooksModule.forRootAsync(
      {
        imports: [CacheModule, ConfigModule],
        inject: [ConfigService],
        useFactory: (
          configService: ConfigService,
        ): NestJsQuickBooksOptions => ({
          authRedirectUrl: 'http://localhost:3000/auth/callback',
          clientId: configService.get<string>('QB_CLIENT_ID'),
          clientSecret: configService.get<string>('QB_CLIENT_SECRET'),
          mode: 'sandbox',
          serverUrl: 'http://localhost:3000',
          scopes: [NestJsQuickBooksScopes.Accounting],
        }),
      },
      {
        provide: NestJsQuickBooksStore,
        useClass: QbStoreService,
      },
    ),
  ],
  controllers: [
    AppController,
    AuthController,
    BillsController,
    CustomersController,
    ItemsController,
    PurchasesController,
    SalesRecieptsController,
    VendorsController,
    VendorCreditsController,
  ],
  providers: [AppService],
})
export class AppModule {}
