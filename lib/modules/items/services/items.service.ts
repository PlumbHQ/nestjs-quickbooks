import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseService } from '../../common/base.service';
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
export class QuickBooksItemsService extends BaseService<
  QuickBooksItemsResponseModel,
  QuickBooksItemsQueryModel,
  QuickBooksItemsQueryResponseModel
> {
  public resource = 'item';

  public create(
    dto: CreateQuickBooksItemsDto,
  ): Observable<QuickBooksItemsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Observable<QuickBooksItemsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksItemsDto,
  ): Observable<QuickBooksItemsResponseModel>;
  public fullUpdate(
    customer: QuickBooksItems,
    dto: FullUpdateQuickBooksItemsDto,
  ): Observable<QuickBooksItemsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksItems,
      string | FullUpdateQuickBooksItemsDto,
      FullUpdateQuickBooksItemsDto?,
    ]
  ): Observable<QuickBooksItemsResponseModel> {
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
  ): Observable<QuickBooksItemsResponseModel>;
  public sparseUpdate(
    item: QuickBooksItems,
    dto: SparseUpdateQuickBooksItemsDto,
  ): Observable<QuickBooksItemsResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksItems,
      string | SparseUpdateQuickBooksItemsDto,
      SparseUpdateQuickBooksItemsDto?,
    ]
  ): Observable<QuickBooksItemsResponseModel> {
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
