import { Controller, Get, Post } from '@nestjs/common';
import { NestJsQuickBooksCustomerService } from 'lib';

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

  @Post()
  public async create(data: any) {
    return this.customersService
      .create(data)
      .then((x) => x.QueryResponse.Customer)
      .catch((e) => console.log(e));
  }
}
