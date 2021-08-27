import { QuickBooksPurchases } from './purchases.model';
import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';

export interface QuickBooksPurchasesResponseDto extends QuickBooksResponseDto {
  Purchase: QuickBooksPurchases;
}

export interface QuickBooksPurchasesQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & {
    Purchase: QuickBooksPurchases[];
  };
}
