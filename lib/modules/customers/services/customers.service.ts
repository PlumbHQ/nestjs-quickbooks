import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksCustomerDto,
  FullUpdateQuickBooksCustomerDto,
  QuickBooksCustomer,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryResponseModel,
  QuickBooksCustomerResponseModel,
  SparseUpdateQuickBooksCustomerDto,
} from '..';
import {
  ICreatableQuickBooksService,
  IQuereableQuickBooksService,
  IReadableQuickBooksService,
  IUpdateableQuickBooksService,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksCustomerService
  extends NestJsQuickBooksBaseService<
    QuickBooksCustomer,
    QuickBooksCustomerQueryDto,
    QuickBooksCustomerQueryResponseModel
  >
  implements
    IQuereableQuickBooksService<
      QuickBooksCustomerQueryDto,
      QuickBooksCustomerQueryResponseModel
    >,
    IReadableQuickBooksService<QuickBooksCustomerResponseModel>,
    ICreatableQuickBooksService<
      CreateQuickBooksCustomerDto,
      QuickBooksCustomerResponseModel
    >,
    IUpdateableQuickBooksService
{
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
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }
}
