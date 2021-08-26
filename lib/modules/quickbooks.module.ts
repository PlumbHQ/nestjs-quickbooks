import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { NestJsQuickBooksConfigModel } from './config/models/quickbooks-config.model';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { NestJsQuickBooksStore } from './store/store.service';
import { LocalStore } from './store/local.store';
import { NESTJS_QUICK_BOOKS_CONFIG } from '../constants';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAccountsModule } from './accounts';
import { NestJsQuickBooksAuthModule } from './auth/auth.module';
import { NestJsQuickBooksCompanyInfoModule } from './company-info';
import { NestJsQuickBooksCustomersModule } from './customers';
import { NestJsQuickBooksItemsModule } from './items';
import { NestJsQuickBooksPurchasesModule } from './purchases/purchases.module';
import { NestJsQuickBooksBillsModule } from './bills';
import { NestJsQuickBooksPurchaseOrdersModule } from './purchase-orders';
import { NestJsQuickBooksSalesReceiptsModule } from './sales-receipts';
import { NestJsQuickBooksVendorCreditsModule } from './vendor-credits';
import { NestJsQuickBooksVendorsModule } from './vendors';

export type NestJsQuickBooksOptions = Partial<NestJsQuickBooksConfigModel>;

export interface NestJsQuickBooksOptionsFactory {
  createMassiveConnectOptions():
    | Promise<NestJsQuickBooksOptions>
    | NestJsQuickBooksOptions;
}

export interface NestJsQuickBooksAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<NestJsQuickBooksOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestJsQuickBooksOptions> | NestJsQuickBooksOptions;
}

@Global()
@Module({})
export class NestJsQuickBooksModule {
  public static forRootAsync(
    options: NestJsQuickBooksAsyncOptions,
    store?: Provider,
  ): DynamicModule {
    if (!store) {
      store = {
        provide: NestJsQuickBooksStore,
        useClass: LocalStore,
      };
    }

    return {
      module: NestJsQuickBooksModule,
      imports: [
        HttpModule,
        ...this.getSubModules(),
        ...(options.imports ?? []),
      ],
      providers: [this.createAsyncProviders(options), store],
      exports: [
        NESTJS_QUICK_BOOKS_CONFIG,
        NestJsQuickBooksStore,
        ...this.getSubModules(),
      ],
    };
  }

  private static createAsyncProviders(
    options: NestJsQuickBooksAsyncOptions,
  ): Provider<any> {
    if (options.useFactory) {
      return {
        provide: NESTJS_QUICK_BOOKS_CONFIG,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useClass and useExisting...
    return {
      provide: NESTJS_QUICK_BOOKS_CONFIG,
      useFactory: async (optionsFactory: NestJsQuickBooksOptionsFactory) =>
        await optionsFactory.createMassiveConnectOptions(),
      inject: [options.useClass],
    };
  }

  private static getSubModules() {
    return [
      NestJsQuickBooksAccountsModule,
      NestJsQuickBooksAuthModule,
      NestJsQuickBooksBillsModule,
      NestJsQuickBooksCompanyInfoModule,
      NestJsQuickBooksCompanyInfoModule,
      NestJsQuickBooksCustomersModule,
      NestJsQuickBooksItemsModule,
      NestJsQuickBooksPurchaseOrdersModule,
      NestJsQuickBooksPurchasesModule,
      NestJsQuickBooksSalesReceiptsModule,
      NestJsQuickBooksVendorCreditsModule,
      NestJsQuickBooksVendorsModule,
    ];
  }
}
