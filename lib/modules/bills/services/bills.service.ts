import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  QuickBooksBillsDeleteResponseDto,
  QuickBooksBillsQueryResponseDto,
  QuickBooksBillsResponseDto,
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
    QuickBooksBillsResponseDto,
    QuickBooksBillsQueryModel,
    QuickBooksBillsQueryResponseDto
  >
  implements IUpdateableQuickBooksService
{
  public resource = 'bill';

  public create(
    dto: CreateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseDto> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksBillsResponseDto> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseDto> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksBillsDeleteResponseDto> {
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
