import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { NestJsQuickBooksConfigModel } from './config/models/quickbooks-config.model';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { NESTJS_QUICK_BOOKS_CONFIG } from '../constants';
import { HttpModule } from '@nestjs/axios';
import { NestJsQuickBooksAuthModule } from './auth/auth.module';
import { NestJsQuickBooksCompanyInfoModule } from './company-info';
import { NestJsQuickBooksCustomerModule } from './customer';
import { NestJsQuickBooksItemModule } from './item';
import { NestJsQuickBooksPurchaseModule } from './purchase/purchase.module';
import { NestJsQuickBooksBillModule } from './bill';
import { NestJsQuickBooksPurchaseOrderModule } from './purchase-order';
import { NestJsQuickBooksSalesReceiptModule } from './sales-receipt';
import { NestJsQuickBooksVendorCreditModule } from './vendor-credit';
import { NestJsQuickBooksVendorModule } from './vendor';

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
  ): DynamicModule {
    return {
      module: NestJsQuickBooksModule,
      imports: [
        HttpModule,
        ...this.getSubModules(),
        ...(options.imports ?? []),
      ],
      providers: [this.createAsyncProviders(options)],
      exports: [NESTJS_QUICK_BOOKS_CONFIG, ...this.getSubModules()],
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
      NestJsQuickBooksAuthModule,
      NestJsQuickBooksBillModule,
      NestJsQuickBooksCompanyInfoModule,
      NestJsQuickBooksCustomerModule,
      NestJsQuickBooksItemModule,
      NestJsQuickBooksPurchaseOrderModule,
      NestJsQuickBooksPurchaseModule,
      NestJsQuickBooksSalesReceiptModule,
      NestJsQuickBooksVendorCreditModule,
      NestJsQuickBooksVendorModule,
    ];
  }
}
