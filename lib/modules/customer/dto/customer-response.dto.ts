import { QuickBooksCustomerEntity } from '../entities/customer.entity';
import {
  QuickBooksQueryResponseData,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';

export interface QuickBooksCustomerResponseModel
  extends QuickBooksResponseModel {
  Customer: QuickBooksCustomerEntity;
}

export interface QuickBooksCustomerQueryResponseModel
  extends QuickBooksQueryResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    Customer: QuickBooksCustomerEntity[];
  };
}
