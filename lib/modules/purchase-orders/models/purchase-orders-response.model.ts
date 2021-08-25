import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksPurchaseOrders } from './purchase-orders.model';

export interface QuickBooksPurchaseOrdersResponseModel
  extends QuickBooksResponseModel {
  PurchaseOrder: QuickBooksPurchaseOrders;
}

export interface QuickBooksPurchaseOrdersQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    PurchaseOrder: QuickBooksPurchaseOrders[];
  };
}
