import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  QuickBooksBillsDeleteResponseModel,
  QuickBooksBillsQueryResponseModel,
  QuickBooksBillsResponseModel,
} from '../models/bills-response.model';
import { QuickBooksBillsQueryModel } from '../models/bills-query.model';
import { QuickBooksBills } from '../models/bills.model';
import {
  CreateQuickBooksBillsDto,
  FullUpdateQuickBooksBillsDto,
} from '../dto/bills.dto';
import { IUpdateableQuickBooksService } from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksBillsService
  extends NestJsQuickBooksBaseService<
    QuickBooksBillsResponseModel,
    QuickBooksBillsQueryModel,
    QuickBooksBillsQueryResponseModel
  >
  implements IUpdateableQuickBooksService
{
  public resource = 'bill';

  public create(
    dto: CreateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksBillsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksBillsDeleteResponseModel> {
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
