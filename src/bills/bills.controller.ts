import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksBillService } from 'lib';

@Controller('bills')
export class BillsController {
  constructor(private readonly service: NestJsQuickBooksBillService) {}

  @Get()
  public async getAll() {
    return this.service.query({}).then((x) => x.QueryResponse.Bill);
  }
}
