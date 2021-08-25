import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksSalesReceipts } from './sales-receipt.model';

export interface QuickBooksSalesReceiptsResponseModel
  extends QuickBooksResponseModel {
  SalesReceipt: QuickBooksSalesReceipts;
}

export interface QuickBooksSalesReceiptsQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    SalesReceipt: QuickBooksSalesReceipts[];
  };
}
