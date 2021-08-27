import { QuickBooksGlobalTaxCalculationsEnum } from '../../common/enums';
import {
  QuickBooksLinkedTxnDto,
  QuickBooksRefDto,
  QuickBooksTxnTaxDetailDto,
} from '../../common/dto';
import {
  QuickBooksAccountBasedExpenseLine,
  QuickBooksItemBasedExpenseLine,
} from 'lib/modules/common/dto/line-items.dto';

export type CreateQuickBooksBillLines =
  | QuickBooksItemBasedExpenseLine
  | QuickBooksAccountBasedExpenseLine;

export type UpdateQuickBooksBillLines =
  | QuickBooksItemBasedExpenseLine
  | QuickBooksAccountBasedExpenseLine;

export interface QuickBooksBillDto {
  CurrencyRef?: QuickBooksRefDto;
  TxnDate?: string;
  APAccountRef?: QuickBooksRefDto;
  SalesTermRef?: QuickBooksRefDto;
  LinkedTxn?: QuickBooksLinkedTxnDto[];
  GlobalTaxCalculation?: QuickBooksGlobalTaxCalculationsEnum;
  TransactionLocationType?: string;
  DueDate?: string;
  DocNumber?: string;
  PrivateNote?: string;
  TxnTaxDetail?: QuickBooksTxnTaxDetailDto;
  ExchangeRate?: number;
  DepartmentRef?: QuickBooksRefDto;
  IncludeInAnnualTPAR?: boolean;
}

export interface CreateQuickBooksBillDto extends QuickBooksBillDto {
  VendorRef: QuickBooksRefDto;
  Line: CreateQuickBooksBillLines[];
}

export interface FullUpdateQuickBooksBillDto extends QuickBooksBillDto {
  VendorRef: QuickBooksRefDto;
  Line: UpdateQuickBooksBillLines[];
}
