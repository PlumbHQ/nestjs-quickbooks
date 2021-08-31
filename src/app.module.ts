import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  NestJsQuickbooksModesEnum,
  NestJsQuickBooksModule,
  NestJsQuickBooksOptions,
  NestJsQuickBooksScopes,
  TokensModel,
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
    NestJsQuickBooksModule.forRootAsync({
      imports: [CacheModule, ConfigModule],
      inject: [ConfigService, QbStoreService],
      useFactory: (
        configService: ConfigService,
        tokenStore: QbStoreService,
      ): NestJsQuickBooksOptions => ({
        authRedirectUrl: 'http://localhost:3000/auth/callback',
        clientId: configService.get<string>('QB_CLIENT_ID'),
        clientSecret: configService.get<string>('QB_CLIENT_SECRET'),
        mode: NestJsQuickbooksModesEnum.Sandbox,
        serverUrl: 'http://localhost:3000',
        scopes: [NestJsQuickBooksScopes.Accounting],
        store: {
          getToken: () => tokenStore.getToken(),
          setToken: (token: TokensModel) => tokenStore.setToken(token),
          unsetToken: () => tokenStore.unsetToken(),
        },
      }),
    }),
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
