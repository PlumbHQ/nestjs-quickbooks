import { Injectable } from '@nestjs/common';
import { BaseService } from '../../common/base.service';
import {
  QuickBooksAccountsDeleteResponseModel,
  QuickBooksAccountsQueryResponseModel,
  QuickBooksAccountsResponseModel,
} from '../models/accounts-response.model';
import { QuickBooksAccountsQueryModel } from '../models/accounts-query.model';
import {
  CreateQuickBooksAccountsDto,
  FullUpdateQuickBooksAccountsDto,
  SparseUpdateQuickBooksAccountsDto,
} from '../dto/accounts.dto';
import { Observable } from 'rxjs';
import { QuickBooksAccounts } from '../models/accounts.model';

@Injectable()
export class QuickBooksAccountsService extends BaseService<
  QuickBooksAccountsResponseModel,
  QuickBooksAccountsQueryModel,
  QuickBooksAccountsQueryResponseModel
> {
  public resource = 'account';

  public create(
    dto: CreateQuickBooksAccountsDto,
  ): Observable<QuickBooksAccountsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Observable<QuickBooksAccountsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksAccountsDto,
  ): Observable<QuickBooksAccountsResponseModel>;
  public fullUpdate(
    account: QuickBooksAccounts,
    dto: FullUpdateQuickBooksAccountsDto,
  ): Observable<QuickBooksAccountsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksAccounts,
      string | FullUpdateQuickBooksAccountsDto,
      FullUpdateQuickBooksAccountsDto?,
    ]
  ): Observable<QuickBooksAccountsResponseModel> {
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
    dto: SparseUpdateQuickBooksAccountsDto,
  ): Observable<QuickBooksAccountsResponseModel>;
  public sparseUpdate(
    account: QuickBooksAccounts,
    dto: SparseUpdateQuickBooksAccountsDto,
  ): Observable<QuickBooksAccountsResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksAccounts,
      string | SparseUpdateQuickBooksAccountsDto,
      SparseUpdateQuickBooksAccountsDto?,
    ]
  ): Observable<QuickBooksAccountsResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Observable<QuickBooksAccountsDeleteResponseModel>;
  public delete(
    bill: QuickBooksAccounts,
  ): Observable<QuickBooksAccountsDeleteResponseModel>;
  public delete(
    ...args: [string | QuickBooksAccounts, string?]
  ): Observable<QuickBooksAccountsDeleteResponseModel> {
    const [id, token] = this.getOperationArguments(args);
    return this.post(
      {
        Id: id,
        SyncToken: token,
      },
      '',
      {
        operation: 'delete',
      },
    );
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksAccounts, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrAccount, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrAccount as string, tokenOrDto as string, dto];
    }

    const account = idOrAccount as QuickBooksAccounts;
    return [account.Id, account.SyncToken, tokenOrDto as DTO];
  }

  private getOperationArguments(
    args: [string | QuickBooksAccounts, string?],
  ): [string, string] {
    const [idOrAccount, token] = args;
    if (token) {
      return [idOrAccount as string, token];
    }

    const account = idOrAccount as QuickBooksAccounts;
    return [account.Id, account.SyncToken];
  }
}
