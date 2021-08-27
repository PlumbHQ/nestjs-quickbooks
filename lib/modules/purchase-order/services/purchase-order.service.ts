import { Injectable } from '@nestjs/common';
import {
  QuickBooksPurchaseOrderEntity,
  QuickBooksPurchaseOrderQueryDto,
  QuickBooksPurchaseOrderDto,
} from 'lib';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import {
  QuickBooksPurchaseOrderDeleteResponseModel,
  QuickBooksPurchaseOrderQueryResponseModel,
  QuickBooksPurchaseOrderResponseModel,
} from '../models/purchase-order-response.model';
import {
  CanRead,
  CanCreate,
  CanFullUpdate,
  CanDelete,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksPurchaseOrderService
  extends NestJsQuickBooksBaseService<
    QuickBooksPurchaseOrderEntity,
    QuickBooksPurchaseOrderQueryDto,
    QuickBooksPurchaseOrderQueryResponseModel
  >
  implements
    CanRead<QuickBooksPurchaseOrderResponseModel>,
    CanCreate<QuickBooksPurchaseOrderDto, QuickBooksPurchaseOrderResponseModel>,
    CanFullUpdate<
      QuickBooksPurchaseOrderDto,
      QuickBooksPurchaseOrderResponseModel
    >,
    CanDelete<QuickBooksPurchaseOrderDeleteResponseModel>
{
  public resource = 'purchaseOrder';

  public read(id: string): Promise<QuickBooksPurchaseOrderResponseModel> {
    return this.get(id);
  }

  public create(
    dto: QuickBooksPurchaseOrderDto,
  ): Promise<QuickBooksPurchaseOrderResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchaseOrderDto,
  ): Promise<QuickBooksPurchaseOrderResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksPurchaseOrderDeleteResponseModel> {
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
