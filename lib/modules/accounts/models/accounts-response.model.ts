import { QuickBooksAccounts } from './accounts.model';
import {
  QuickBooksDeleteResponseDto,
  QuickBooksResponseDto,
} from '../../common';

export interface QuickBooksAccountsResponseDto extends QuickBooksResponseDto {
  Account: QuickBooksAccounts;
}

export interface QuickBooksAccountsQueryResponseDto
  extends QuickBooksResponseDto {
  QueryResponse: QuickBooksResponseDto & { Account: QuickBooksAccounts[] };
}

export interface QuickBooksAccountsDeleteResponseDto
  extends QuickBooksResponseDto {
  Account: QuickBooksDeleteResponseDto;
}
