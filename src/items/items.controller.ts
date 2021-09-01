import { Controller, Get } from '@nestjs/common';
import { Op, NestJsQuickBooksItemService } from 'lib';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: NestJsQuickBooksItemService) {}

  @Get()
  public async getAll() {
    return this.itemsService
      .query({})
      .then((x) => x.QueryResponse.Item)
      .catch((err) => console.log(JSON.stringify(err, null, 2)));
  }

  @Get('condition')
  public async condition() {
    return this.itemsService
      .query({
        Sku: {
          [Op.in]: ['PHQ100116', 'PHQ100073', 'PHQ100059'],
        },
      })
      .then((x) => x.QueryResponse.Item);
  }
}
