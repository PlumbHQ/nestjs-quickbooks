import {
  QuickBooksDeleteResponseModel,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksPurchaseOrderEntity } from '../entities/purchase-order.entity';

export interface QuickBooksPurchaseOrderResponseModel
  extends QuickBooksResponseModel {
  PurchaseOrder: QuickBooksPurchaseOrderEntity;
}

export interface QuickBooksPurchaseOrderQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    PurchaseOrder: QuickBooksPurchaseOrderEntity[];
  };
}

export interface QuickBooksPurchaseOrderDeleteResponseModel
  extends QuickBooksResponseModel {
  PurchaseOrder: QuickBooksDeleteResponseModel;
}
