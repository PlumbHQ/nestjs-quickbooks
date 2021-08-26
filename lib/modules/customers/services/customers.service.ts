import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksCustomerDto,
  FullUpdateQuickBooksCustomerDto,
  QuickBooksCustomer,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryDtoResponseModel,
  QuickBooksCustomerResponseModel,
  SparseUpdateQuickBooksCustomerDto,
} from '..';

@Injectable()
export class NestJsQuickBooksCustomerService extends NestJsQuickBooksBaseService<
  QuickBooksCustomer,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryDtoResponseModel
> {
  public resource = 'customer';

  public create(
    dto: CreateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksCustomerResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel>;
  public fullUpdate(
    customer: QuickBooksCustomer,
    dto: FullUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksCustomer,
      string | FullUpdateQuickBooksCustomerDto,
      FullUpdateQuickBooksCustomerDto?,
    ]
  ): Promise<QuickBooksCustomerResponseModel> {
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
    dto: SparseUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel>;
  public sparseUpdate(
    customer: QuickBooksCustomer,
    dto: SparseUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksCustomer,
      string | SparseUpdateQuickBooksCustomerDto,
      SparseUpdateQuickBooksCustomerDto?,
    ]
  ): Promise<QuickBooksCustomerResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksCustomer, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCustomer, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCustomer as string, tokenOrDto as string, dto];
    }

    const customer = idOrCustomer as QuickBooksCustomer;
    return [customer.Id, customer.SyncToken, tokenOrDto as DTO];
  }
}
