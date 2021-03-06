import {
  QuickBooksDeleteResponseData,
  QuickBooksQueryResponseData,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksVendorCreditEntity } from '../entities/vendor-credit.entity';

export interface QuickBooksVendorCreditResponseModel
  extends QuickBooksResponseModel {
  VendorCredit: QuickBooksVendorCreditEntity;
}

export interface QuickBooksVendorCreditQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    VendorCredit: QuickBooksVendorCreditEntity[];
  };
}

export interface QuickBooksVendorCreditDeleteResponseModel
  extends QuickBooksResponseModel {
  VendorCredit: QuickBooksDeleteResponseData;
}
