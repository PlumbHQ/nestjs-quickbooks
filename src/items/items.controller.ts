import { Controller, Get } from '@nestjs/common';
import { NestJsQuickBooksItemService } from 'lib/modules/item';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: NestJsQuickBooksItemService,
  ) {}

  @Get()
  public async getAll() {
    return this.itemsService.query({}).then((x) => x.QueryResponse.Item);
  }
}
