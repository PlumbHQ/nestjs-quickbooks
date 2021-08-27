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
import { IUpdateableQuickBooksService } from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksAccountsService
  extends NestJsQuickBooksBaseService<
    QuickBooksAccountsResponseModel,
    QuickBooksAccountsQueryModel,
    QuickBooksAccountsQueryResponseModel
  >
  implements IUpdateableQuickBooksService
{
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
  ): Promise<QuickBooksAccountsResponseModel> {
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
  ): Promise<QuickBooksAccountsResponseModel> {
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
  ): Promise<QuickBooksAccountsDeleteResponseModel> {
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
}
