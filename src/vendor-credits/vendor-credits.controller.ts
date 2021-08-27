import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksVendorCreditService } from 'lib';

@Controller('vendor-credits')
export class VendorCreditsController {
  constructor(private readonly service: NestJsQuickBooksVendorCreditService) {}

  @Get()
  public async getAll() {
    return this.service.query({}).then((x) => x.QueryResponse.VendorCredit);
  }
}
