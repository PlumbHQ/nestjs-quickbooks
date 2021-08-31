import { Injectable } from '@nestjs/common';
import {
  QuickBooksPurchaseQueryDto,
  QuickBooksPurchaseDto,
  QuickBooksPurchaseDeleteResponseModel,
  QuickBooksPurchaseQueryResponseModel,
  QuickBooksPurchaseResponseModel,
  QuickBooksPurchaseEntity,
} from '..';
import {
  NestJsQuickBooksBaseService,
  CanCreate,
  CanDelete,
  CanFullUpdate,
  CanRead,
} from '../../common';

@Injectable()
export class NestJsQuickBooksPurchaseService
  extends NestJsQuickBooksBaseService<
    QuickBooksPurchaseEntity,
    QuickBooksPurchaseQueryDto,
    QuickBooksPurchaseQueryResponseModel
  >
  implements
    CanRead<QuickBooksPurchaseResponseModel>,
    CanCreate<QuickBooksPurchaseDto, QuickBooksPurchaseResponseModel>,
    CanFullUpdate<QuickBooksPurchaseDto, QuickBooksPurchaseResponseModel>,
    CanDelete<QuickBooksPurchaseDeleteResponseModel>
{
  public resource = 'purchase';

  public create(
    dto: QuickBooksPurchaseDto,
  ): Promise<QuickBooksPurchaseResponseModel> {
    return this.post(dto);
  }

  public read(id: string): Promise<QuickBooksPurchaseResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchaseDto,
  ): Promise<QuickBooksPurchaseResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksPurchaseDeleteResponseModel> {
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
