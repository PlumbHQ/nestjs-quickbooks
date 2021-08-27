import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksVendorService } from 'lib';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly service: NestJsQuickBooksVendorService) {}

  @Get()
  public async getAll() {
    return this.service.query({}).then((x) => x.QueryResponse.Vendor);
  }
}
