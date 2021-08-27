import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksPurchaseService } from 'lib';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly service: NestJsQuickBooksPurchaseService) {}

  @Get()
  public async getAll() {
    return this.service.query({}).then((x) => x.QueryResponse.Purchase);
  }
}
