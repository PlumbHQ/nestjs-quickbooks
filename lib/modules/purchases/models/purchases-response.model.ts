import { QuickBooksPurchases } from './purchases.model';
import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';

export interface QuickBooksPurchasesResponseModel
  extends QuickBooksResponseModel {
  Purchase: QuickBooksPurchases;
}

export interface QuickBooksPurchasesQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Purchase: QuickBooksPurchases[];
  };
}
