import { QuickBooksCustomerEntity } from '../entities/customers.entity';
import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';

export interface QuickBooksCustomerResponseModel
  extends QuickBooksResponseModel {
  Customer: QuickBooksCustomerEntity;
}

export interface QuickBooksCustomerQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Customer: QuickBooksCustomerEntity[];
  };
}
