import { Injectable } from '@nestjs/common';
import { BaseService } from 'lib/modules/common/base.service';
import { Observable } from 'rxjs';
import { QuickBooksPurchaseOrdersDto } from '../dto/purchase-orders.dto';
import { QuickBooksPurchaseOrdersQuery } from '../models/purchase-orders-query.model';
import {
  QuickBooksPurchaseOrdersQueryResponseModel,
  QuickBooksPurchaseOrdersResponseModel,
} from '../models/purchase-orders-response.model';
import { QuickBooksPurchaseOrders } from '../models/purchase-orders.model';

@Injectable()
export class PurchaseOrdersService extends BaseService<
  QuickBooksPurchaseOrders,
  QuickBooksPurchaseOrdersQuery,
  QuickBooksPurchaseOrdersQueryResponseModel
> {
  public resource = 'purchaseOrder';

  public create(
    dto: QuickBooksPurchaseOrdersDto,
  ): Observable<QuickBooksPurchaseOrdersResponseModel> {
    return this.post(dto);
  }

  public readById(
    id: string,
  ): Observable<QuickBooksPurchaseOrdersResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchaseOrdersDto,
  ): Observable<QuickBooksPurchaseOrdersResponseModel>;
  public fullUpdate(
    purchaseOrder: QuickBooksPurchaseOrders,
    dto: QuickBooksPurchaseOrdersDto,
  ): Observable<QuickBooksPurchaseOrdersResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksPurchaseOrders,
      string | QuickBooksPurchaseOrdersDto,
      QuickBooksPurchaseOrdersDto?,
    ]
  ): Observable<QuickBooksPurchaseOrdersResponseModel> {
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
    dto: QuickBooksPurchaseOrdersDto,
  ): Observable<QuickBooksPurchaseOrdersResponseModel>;
  public sparseUpdate(
    purchaseOrder: QuickBooksPurchaseOrders,
    dto: QuickBooksPurchaseOrdersDto,
  ): Observable<QuickBooksPurchaseOrdersResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksPurchaseOrders,
      string | QuickBooksPurchaseOrdersDto,
      QuickBooksPurchaseOrdersDto?,
    ]
  ): Observable<QuickBooksPurchaseOrdersResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksPurchaseOrders, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCustomer, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCustomer as string, tokenOrDto as string, dto];
    }

    const purchaseOrder = idOrCustomer as QuickBooksPurchaseOrders;
    return [purchaseOrder.Id, purchaseOrder.SyncToken, tokenOrDto as DTO];
  }
}
