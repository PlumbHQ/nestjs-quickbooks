import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';
import { QuickBooksVendorCredits } from './vendor-credits.model';

export interface QuickBooksVendorCreditsResponseDto
  extends QuickBooksResponseDto {
  VendorCredit: QuickBooksVendorCredits;
}

export interface QuickBooksVendorCreditsQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & {
    VendorCredit: QuickBooksVendorCredits[];
  };
}
