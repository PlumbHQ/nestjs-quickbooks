import { QuickBooksCustomer } from './customers.model';
import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';

export interface QuickBooksCustomerResponseModel
  extends QuickBooksResponseModel {
  Customer: QuickBooksCustomer;
}

export interface QuickBooksCustomerQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Customer: QuickBooksCustomer[];
  };
}
