import { QuickBooksCustomerEntity } from '../entities/customers.entity';
import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';

export interface QuickBooksCustomerResponseDto extends QuickBooksResponseDto {
  Customer: QuickBooksCustomerEntity;
}

export interface QuickBooksCustomerQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & {
    Customer: QuickBooksCustomerEntity[];
  };
}
