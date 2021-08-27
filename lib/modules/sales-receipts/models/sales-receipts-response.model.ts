import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';
import { QuickBooksSalesReceipts } from './sales-receipt.model';

export interface QuickBooksSalesReceiptsResponseDto
  extends QuickBooksResponseDto {
  SalesReceipt: QuickBooksSalesReceipts;
}

export interface QuickBooksSalesReceiptsQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & {
    SalesReceipt: QuickBooksSalesReceipts[];
  };
}
