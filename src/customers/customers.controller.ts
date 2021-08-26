import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksCustomerService } from 'lib/modules/customers';

@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: NestJsQuickBooksCustomerService,
  ) {}

  @Get()
  public async getAll() {
    return this.customersService
      .query({})
      .then((x) => x.QueryResponse.Customer);
  }
}
