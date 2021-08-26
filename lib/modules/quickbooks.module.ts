import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { QuickBooksConfigModel } from './config/models/quickbooks-config.model';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { QuickBooksStore } from './store/store.service';
import { LocalStore } from './store/local.store';
import { QuickBooksAuthModule } from './auth/auth.module';
import { NESTJS_QUICK_BOOKS_CONFIG } from '../constants';
import { QuickBooksCustomersModule } from './customers';
import { HttpModule } from '@nestjs/axios';
import { QuickBooksAccountsModule } from './accounts';
import { QuickBooksCompanyInfoModule } from './company-info';
import { QuickBooksItemsModule } from './items';
import { QuickBooksPurchasesModule } from './purchases/purchases.module';
import { QuickBooksBillsModule } from './bills';
import { QuickBooksPurchaseOrdersModule } from './purchase-orders';
import { QuickBooksSalesReceiptsModule } from './sales-receipts';
import { QuickBooksVendorCreditsModule } from './vendor-credits';
import { QuickBooksVendorsModule } from './vendors';

export type QuickBooksOptions = Partial<QuickBooksConfigModel>;

export interface QuickBooksOptionsFactory {
  createMassiveConnectOptions(): Promise<QuickBooksOptions> | QuickBooksOptions;
}

export interface QuickBooksAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<QuickBooksOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<QuickBooksOptions> | QuickBooksOptions;
}

@Global()
@Module({})
export class QuickBooksModule {
  public static forRootAsync(
    options: QuickBooksAsyncOptions,
    store?: Provider,
  ): DynamicModule {
    if (!store) {
      store = {
        provide: QuickBooksStore,
        useClass: LocalStore,
      };
    }

    return {
      module: QuickBooksModule,
      imports: [
        HttpModule,
        ...this.getSubModules(),
        ...(options.imports ?? []),
      ],
      providers: [this.createAsyncProviders(options), store],
      exports: [
        NESTJS_QUICK_BOOKS_CONFIG,
        QuickBooksStore,
        ...this.getSubModules(),
      ],
    };
  }

  private static createAsyncProviders(
    options: QuickBooksAsyncOptions,
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
      useFactory: async (optionsFactory: QuickBooksOptionsFactory) =>
        await optionsFactory.createMassiveConnectOptions(),
      inject: [options.useClass],
    };
  }

  private static getSubModules() {
    return [
      QuickBooksAccountsModule,
      QuickBooksAuthModule,
      QuickBooksBillsModule,
      QuickBooksCompanyInfoModule,
      QuickBooksCustomersModule,
      QuickBooksItemsModule,
      QuickBooksPurchaseOrdersModule,
      QuickBooksPurchasesModule,
      QuickBooksSalesReceiptsModule,
      QuickBooksVendorCreditsModule,
      QuickBooksVendorsModule,
    ];
  }
}
