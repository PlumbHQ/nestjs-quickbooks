import { QuickBooksGlobalTaxCalculationsEnum } from '../../common/enums';
import {
  QuickBooksLinkedTxnDto,
  QuickBooksRefDto,
  QuickBooksTxnTaxDetailDto,
} from '../../common/dto';
import {
  QuickBooksAccountBasedExpenseLineDto,
  QuickBooksItemBasedExpenseLineDto,
} from 'lib/modules/common/dto/line-items.dto';

export type CreateQuickBooksBillLines =
  | QuickBooksItemBasedExpenseLineDto
  | QuickBooksAccountBasedExpenseLineDto;

export type UpdateQuickBooksBillLines =
  | QuickBooksItemBasedExpenseLineDto
  | QuickBooksAccountBasedExpenseLineDto;

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
