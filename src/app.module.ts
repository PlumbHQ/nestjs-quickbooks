import { Module } from '@nestjs/common';
import { QuickBooksModule, QuickBooksScopes } from 'lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { AuthController } from './auth/auth.controller';
import { ItemsController } from './items/items.controller';
import { QuickBooksStore } from 'lib/modules/store';
import { CacheModule } from './cache/cache.module';
import { QbStoreService } from './cache/qb-store/qb-store.service';

@Module({
  imports: [
    QuickBooksModule.forRoot({
      imports: [CacheModule],
      config: {
        mode: 'sandbox',
        clientId: 'ABSICzheIzGOKwl8YOoGSMBvY73fSmxX6Hu6U7s9GYM49HDrun',
        clientSecret: 'EY2jcAoWguhJpnUV81eH1Y7n0Hik9ioKLPEwj58P',
        serverUrl: 'http://localhost:3000',
        authRedirectUrl: 'http://localhost:3000/auth/callback',
        scopes: [QuickBooksScopes.Accounting],
      },
      store: {
        provide: QuickBooksStore,
        useClass: QbStoreService,
      },
    }),
    CacheModule,
  ],
  controllers: [
    AppController,
    CustomersController,
    AuthController,
    ItemsController,
  ],
  providers: [AppService],
})
export class AppModule {}
