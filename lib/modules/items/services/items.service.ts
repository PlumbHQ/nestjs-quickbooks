import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksItemsDto,
  FullUpdateQuickBooksItemsDto,
  QuickBooksItems,
  QuickBooksItemsQueryModel,
  QuickBooksItemsQueryResponseModel,
  QuickBooksItemsResponseModel,
  SparseUpdateQuickBooksItemsDto,
} from '..';

@Injectable()
export class NestJsNestJsQuickBooksItemsService extends NestJsQuickBooksBaseService<
  QuickBooksItemsResponseModel,
  QuickBooksItemsQueryModel,
  QuickBooksItemsQueryResponseModel
> {
  public resource = 'item';

  public create(
    dto: CreateQuickBooksItemsDto,
  ): Promise<QuickBooksItemsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksItemsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksItemsDto,
  ): Promise<QuickBooksItemsResponseModel>;
  public fullUpdate(
    customer: QuickBooksItems,
    dto: FullUpdateQuickBooksItemsDto,
  ): Promise<QuickBooksItemsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksItems,
      string | FullUpdateQuickBooksItemsDto,
      FullUpdateQuickBooksItemsDto?,
    ]
  ): Promise<QuickBooksItemsResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksItemsDto,
  ): Promise<QuickBooksItemsResponseModel>;
  public sparseUpdate(
    item: QuickBooksItems,
    dto: SparseUpdateQuickBooksItemsDto,
  ): Promise<QuickBooksItemsResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksItems,
      string | SparseUpdateQuickBooksItemsDto,
      SparseUpdateQuickBooksItemsDto?,
    ]
  ): Promise<QuickBooksItemsResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksItems, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrItem, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrItem as string, tokenOrDto as string, dto];
    }

    const item = idOrItem as QuickBooksItems;
    return [item.Id, item.SyncToken, tokenOrDto as DTO];
  }
}
