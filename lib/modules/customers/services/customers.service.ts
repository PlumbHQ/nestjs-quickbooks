import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseService } from '../../common/base.service';
import {
  CreateQuickBooksCustomersDto,
  FullUpdateQuickBooksCustomersDto,
  QuickBooksCustomers,
  QuickBooksCustomersQuery,
  QuickBooksCustomersQueryResponseModel,
  QuickBooksCustomersResponseModel,
  SparseUpdateQuickBooksCustomersDto,
} from '..';

@Injectable()
export class QuickBooksCustomersService extends BaseService<
  QuickBooksCustomers,
  QuickBooksCustomersQuery,
  QuickBooksCustomersQueryResponseModel
> {
  public resource = 'customer';

  public create(
    dto: CreateQuickBooksCustomersDto,
  ): Observable<QuickBooksCustomersResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Observable<QuickBooksCustomersResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksCustomersDto,
  ): Observable<QuickBooksCustomersResponseModel>;
  public fullUpdate(
    customer: QuickBooksCustomers,
    dto: FullUpdateQuickBooksCustomersDto,
  ): Observable<QuickBooksCustomersResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksCustomers,
      string | FullUpdateQuickBooksCustomersDto,
      FullUpdateQuickBooksCustomersDto?,
    ]
  ): Observable<QuickBooksCustomersResponseModel> {
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
    dto: SparseUpdateQuickBooksCustomersDto,
  ): Observable<QuickBooksCustomersResponseModel>;
  public sparseUpdate(
    customer: QuickBooksCustomers,
    dto: SparseUpdateQuickBooksCustomersDto,
  ): Observable<QuickBooksCustomersResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksCustomers,
      string | SparseUpdateQuickBooksCustomersDto,
      SparseUpdateQuickBooksCustomersDto?,
    ]
  ): Observable<QuickBooksCustomersResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksCustomers, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCustomer, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCustomer as string, tokenOrDto as string, dto];
    }

    const customer = idOrCustomer as QuickBooksCustomers;
    return [customer.Id, customer.SyncToken, tokenOrDto as DTO];
  }
}
