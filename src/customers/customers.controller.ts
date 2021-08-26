import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksCustomersService } from 'lib/modules/customers';

@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: NestJsQuickBooksCustomersService,
  ) {}

  @Get()
  public async getAll() {
    return this.customersService
      .query({})
      .toPromise()
      .then((x) => x.QueryResponse.Customer);
  }
}
