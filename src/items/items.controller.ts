import { Controller, Get } from '@nestjs/common';
import { QuickBooksItemsService } from 'lib/modules/items';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: QuickBooksItemsService) {}

  @Get()
  public async getAll() {
    // return this.itemsService
    //   .query({})
    //   .toPromise()
    //   .then((x) => x.QueryResponse.Item);
  }
}
