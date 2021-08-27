import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksCustomerDto,
  FullUpdateQuickBooksCustomerDto,
  QuickBooksCustomerEntity,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryResponseModel,
  QuickBooksCustomerResponseModel,
  SparseUpdateQuickBooksCustomerDto,
} from '..';

@Injectable()
export class NestJsQuickBooksCustomerService extends NestJsQuickBooksBaseService<
  QuickBooksCustomerEntity,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryResponseModel
> {
  public resource = 'customer';

  public readById(id: string): Promise<QuickBooksCustomerResponseModel> {
    return this.get(id);
  }

  public create(
    dto: CreateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel> {
    return this.post({
      Id: id,
      SyncToken: token,
      ...dto,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel> {
    return this.post({
      Id: id,
      SyncToken: token,
      ...dto,
      sparse: true,
    });
  }
}
