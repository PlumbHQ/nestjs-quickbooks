import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  QuickBooksAccountsDeleteResponseDto,
  QuickBooksAccountsQueryResponseDto,
  QuickBooksAccountsResponseDto,
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
    QuickBooksAccountsResponseDto,
    QuickBooksAccountsQueryModel,
    QuickBooksAccountsQueryResponseDto
  >
  implements IUpdateableQuickBooksService
{
  public resource = 'account';

  public create(
    dto: CreateQuickBooksAccountsDto,
  ): Promise<QuickBooksAccountsResponseDto> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksAccountsResponseDto> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksAccountsDto,
  ): Promise<QuickBooksAccountsResponseDto> {
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
  ): Promise<QuickBooksAccountsResponseDto> {
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
  ): Promise<QuickBooksAccountsDeleteResponseDto> {
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
