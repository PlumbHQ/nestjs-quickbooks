import { Test, TestingModule } from '@nestjs/testing';
import { QbStoreService } from './qb-store.service';

describe('QbStoreService', () => {
  let service: QbStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QbStoreService],
    }).compile();

    service = module.get<QbStoreService>(QbStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
