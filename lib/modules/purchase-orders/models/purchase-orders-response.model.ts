import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';
import { QuickBooksPurchaseOrders } from './purchase-orders.model';

export interface QuickBooksPurchaseOrdersResponseDto
  extends QuickBooksResponseDto {
  PurchaseOrder: QuickBooksPurchaseOrders;
}

export interface QuickBooksPurchaseOrdersQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & {
    PurchaseOrder: QuickBooksPurchaseOrders[];
  };
}
