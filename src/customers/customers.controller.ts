import { Controller, Get } from '@nestjs/common';
import { QuickBooksCustomersService } from 'lib/modules/customers';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: QuickBooksCustomersService) {}

  @Get()
  public async getAll() {
    return (await this.customersService.withDefaultCompany())
      .query({})
      .toPromise()
      .then((x) => x.QueryResponse.Customer);
  }
}
