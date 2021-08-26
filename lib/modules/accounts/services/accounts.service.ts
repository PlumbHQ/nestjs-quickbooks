import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
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
import { QuickBooksAccounts } from '../models/accounts.model';

@Injectable()
export class NestJsQuickBooksAccountsService extends NestJsQuickBooksBaseService<
  QuickBooksAccountsResponseModel,
  QuickBooksAccountsQueryModel,
  QuickBooksAccountsQueryResponseModel
> {
  public resource = 'account';

  public create(
    dto: CreateQuickBooksAccountsDto,
  ): Promise<QuickBooksAccountsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksAccountsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksAccountsDto,
  ): Promise<QuickBooksAccountsResponseModel>;
  public fullUpdate(
    account: QuickBooksAccounts,
    dto: FullUpdateQuickBooksAccountsDto,
  ): Promise<QuickBooksAccountsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksAccounts,
      string | FullUpdateQuickBooksAccountsDto,
      FullUpdateQuickBooksAccountsDto?,
    ]
  ): Promise<QuickBooksAccountsResponseModel> {
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
  ): Promise<QuickBooksAccountsResponseModel>;
  public sparseUpdate(
    account: QuickBooksAccounts,
    dto: SparseUpdateQuickBooksAccountsDto,
  ): Promise<QuickBooksAccountsResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksAccounts,
      string | SparseUpdateQuickBooksAccountsDto,
      SparseUpdateQuickBooksAccountsDto?,
    ]
  ): Promise<QuickBooksAccountsResponseModel> {
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
  ): Promise<QuickBooksAccountsDeleteResponseModel>;
  public delete(
    bill: QuickBooksAccounts,
  ): Promise<QuickBooksAccountsDeleteResponseModel>;
  public delete(
    ...args: [string | QuickBooksAccounts, string?]
  ): Promise<QuickBooksAccountsDeleteResponseModel> {
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
