import { Module, CacheModule as NestCacheModule } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { QbStoreService } from './qb-store/qb-store.service';

@Module({
  imports: [
    NestCacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: '6379',
    }),
  ],
  providers: [QbStoreService],
  exports: [QbStoreService, NestCacheModule],
})
export class CacheModule {}
