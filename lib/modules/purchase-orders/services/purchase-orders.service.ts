import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import { QuickBooksPurchaseOrdersDto } from '../dto/purchase-orders.dto';
import { QuickBooksPurchaseOrdersQuery } from '../models/purchase-orders-query.model';
import {
  QuickBooksPurchaseOrdersQueryResponseModel,
  QuickBooksPurchaseOrdersResponseModel,
} from '../models/purchase-orders-response.model';
import { QuickBooksPurchaseOrders } from '../models/purchase-orders.model';

@Injectable()
export class NestJsQuickBooksPurchaseOrdersService extends NestJsQuickBooksBaseService<
  QuickBooksPurchaseOrders,
  QuickBooksPurchaseOrdersQuery,
  QuickBooksPurchaseOrdersQueryResponseModel
> {
  public resource = 'purchaseOrder';

  public create(
    dto: QuickBooksPurchaseOrdersDto,
  ): Promise<QuickBooksPurchaseOrdersResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksPurchaseOrdersResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchaseOrdersDto,
  ): Promise<QuickBooksPurchaseOrdersResponseModel>;
  public fullUpdate(
    purchaseOrder: QuickBooksPurchaseOrders,
    dto: QuickBooksPurchaseOrdersDto,
  ): Promise<QuickBooksPurchaseOrdersResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksPurchaseOrders,
      string | QuickBooksPurchaseOrdersDto,
      QuickBooksPurchaseOrdersDto?,
    ]
  ): Promise<QuickBooksPurchaseOrdersResponseModel> {
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
  ): Promise<QuickBooksPurchaseOrdersResponseModel>;
  public sparseUpdate(
    purchaseOrder: QuickBooksPurchaseOrders,
    dto: QuickBooksPurchaseOrdersDto,
  ): Promise<QuickBooksPurchaseOrdersResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksPurchaseOrders,
      string | QuickBooksPurchaseOrdersDto,
      QuickBooksPurchaseOrdersDto?,
    ]
  ): Promise<QuickBooksPurchaseOrdersResponseModel> {
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
