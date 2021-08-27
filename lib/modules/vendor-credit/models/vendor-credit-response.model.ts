import {
  QuickBooksDeleteResponseModel,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksVendorCreditEntity } from '../entities/vendor-credit.entity';

export interface QuickBooksVendorCreditResponseModel
  extends QuickBooksResponseModel {
  VendorCredit: QuickBooksVendorCreditEntity;
}

export interface QuickBooksVendorCreditQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    VendorCredit: QuickBooksVendorCreditEntity[];
  };
}

export interface QuickBooksVendorCreditDeleteResponseModel
  extends QuickBooksResponseModel {
  VendorCredit: QuickBooksDeleteResponseModel;
}
