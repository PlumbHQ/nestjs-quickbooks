import {
  QuickBooksDeleteResponseDto,
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';
import { QuickBooksBills } from './bills.model';

export interface QuickBooksBillsResponseDto extends QuickBooksResponseDto {
  Bill: QuickBooksBills;
}

export interface QuickBooksBillsQueryResponseDto extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & { Bill: QuickBooksBills[] };
}

export interface QuickBooksBillsDeleteResponseDto
  extends QuickBooksResponseDto {
  Bill: QuickBooksDeleteResponseDto;
}
