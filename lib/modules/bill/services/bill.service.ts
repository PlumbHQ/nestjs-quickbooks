import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  QuickBooksBillDeleteResponseModel,
  QuickBooksBillQueryResponseModel,
  QuickBooksBillResponseModel,
} from '../models/bill-response.model';
import { QuickBooksBillQueryDto } from '../dto/bill-query.dto';
import {
  CreateQuickBooksBillDto,
  FullUpdateQuickBooksBillDto,
} from '../dto/bill.dto';
import {
  CanCreate,
  CanDelete,
  CanFullUpdate,
  CanRead,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksBillService
  extends NestJsQuickBooksBaseService<
    QuickBooksBillResponseModel,
    QuickBooksBillQueryDto,
    QuickBooksBillQueryResponseModel
  >
  implements
    CanRead<QuickBooksBillResponseModel>,
    CanCreate<CreateQuickBooksBillDto, QuickBooksBillResponseModel>,
    CanFullUpdate<FullUpdateQuickBooksBillDto, QuickBooksBillResponseModel>,
    CanDelete<QuickBooksBillDeleteResponseModel>
{
  public resource = 'bill';

  public read(id: string): Promise<QuickBooksBillResponseModel> {
    return this.get(id);
  }

  public create(
    dto: CreateQuickBooksBillDto,
  ): Promise<QuickBooksBillResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksBillDto,
  ): Promise<QuickBooksBillResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksBillDeleteResponseModel> {
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
