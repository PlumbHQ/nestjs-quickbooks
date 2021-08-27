import {
  QuickBooksQueryResponseData,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksVendorEntity } from '../entities/vendor.entity';

export interface QuickBooksVendorResponseModel extends QuickBooksResponseModel {
  Vendor: QuickBooksVendorEntity;
}

export interface QuickBooksVendorQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    Vendor: QuickBooksVendorEntity[];
  };
}
