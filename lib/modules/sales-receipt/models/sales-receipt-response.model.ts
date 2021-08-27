import {
  QuickBooksDeleteResponseModel,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksSalesReceiptEntity } from '../entities/sales-receipt.entity';

export interface QuickBooksSalesReceiptResponseModel
  extends QuickBooksResponseModel {
  SalesReceipt: QuickBooksSalesReceiptEntity;
}

export interface QuickBooksSalesReceiptQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    SalesReceipt: QuickBooksSalesReceiptEntity[];
  };
}

export interface QuickBooksSalesReceiptDeleteResponseModel
  extends QuickBooksResponseModel {
  SalesReceipt: QuickBooksDeleteResponseModel;
}
