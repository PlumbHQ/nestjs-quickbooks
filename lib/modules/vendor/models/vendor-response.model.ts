import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksVendorEntity } from '../entities/vendor.entity';

export interface QuickBooksVendorResponseModel extends QuickBooksResponseModel {
  Vendor: QuickBooksVendorEntity;
}

export interface QuickBooksVendorQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Vendor: QuickBooksVendorEntity[];
  };
}
