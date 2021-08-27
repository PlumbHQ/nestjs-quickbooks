import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksSalesReceiptService } from 'lib';

@Controller('sales-receipts')
export class SalesRecieptsController {
  constructor(private readonly service: NestJsQuickBooksSalesReceiptService) {}

  @Get()
  public async getAll() {
    return this.service.query({}).then((x) => x.QueryResponse.SalesReceipt);
  }
}
