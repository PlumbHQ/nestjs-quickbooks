import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksVendorCredits } from './vendor-credits.model';

export interface QuickBooksVendorCreditsResponseModel
  extends QuickBooksResponseModel {
  VendorCredit: QuickBooksVendorCredits;
}

export interface QuickBooksVendorCreditsQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    VendorCredit: QuickBooksVendorCredits[];
  };
}
