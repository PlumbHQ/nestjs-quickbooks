import { Controller, Get } from '@nestjs/common';
import { Op, NestJsQuickBooksItemService } from 'lib';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: NestJsQuickBooksItemService) {}

  @Get()
  public async getAll() {
    return this.itemsService.query({}).then((x) => x.QueryResponse.Item);
  }

  @Get('condition')
  public async condition() {
    return this.itemsService
      .query({
        Name: {
          [Op.in]: ['Soil'],
        },
      })
      .then((x) => x.QueryResponse.Item);
  }
}
