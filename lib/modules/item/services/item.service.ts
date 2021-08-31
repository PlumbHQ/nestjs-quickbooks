import { Injectable } from '@nestjs/common';
import {
  CreateQuickBooksItemDto,
  FullUpdateQuickBooksItemDto,
  QuickBooksItemQueryDto,
  QuickBooksItemQueryResponseModel,
  QuickBooksItemResponseModel,
  SparseUpdateQuickBooksItemDto,
} from '..';
import {
  NestJsQuickBooksBaseService,
  CanCreate,
  CanRead,
  CanSparseUpdate,
} from '../../common';

@Injectable()
export class NestJsQuickBooksItemService
  extends NestJsQuickBooksBaseService<
    QuickBooksItemResponseModel,
    QuickBooksItemQueryDto,
    QuickBooksItemQueryResponseModel
  >
  implements
    CanRead<QuickBooksItemResponseModel>,
    CanCreate<CreateQuickBooksItemDto, QuickBooksItemResponseModel>,
    CanSparseUpdate<FullUpdateQuickBooksItemDto, QuickBooksItemResponseModel>,
    CanSparseUpdate<SparseUpdateQuickBooksItemDto, QuickBooksItemResponseModel>
{
  public resource = 'item';

  public read(id: string): Promise<QuickBooksItemResponseModel> {
    return this.get(id);
  }

  public create(
    dto: CreateQuickBooksItemDto,
  ): Promise<QuickBooksItemResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksItemDto,
  ): Promise<QuickBooksItemResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksItemDto,
  ): Promise<QuickBooksItemResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }
}
