import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';
import { QuickBooksVendors } from './vendors.model';

export interface QuickBooksVendorsResponseDto extends QuickBooksResponseDto {
  Vendor: QuickBooksVendors;
}

export interface QuickBooksVendorsQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & { Vendor: QuickBooksVendors[] };
}
