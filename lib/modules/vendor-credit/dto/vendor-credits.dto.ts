import {
  QuickBooksRefDto,
  QuickBooksLinkedTxnDto,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksAccountBasedExpenseLineDto,
} from '../../common';

export interface QuickBooksVendorCreditDto {
  VendorRef: QuickBooksRefDto;
  Line:
    | QuickBooksItemBasedExpenseLineDto[]
    | QuickBooksAccountBasedExpenseLineDto[];
  CurrencyRef: QuickBooksRefDto;
  DocNumber?: string;
  PrivateNote?: string;
  LinkedTxn?: QuickBooksLinkedTxnDto[];
  GlobalTaxCalculation?: QuickBooksGlobalTaxCalculationsEnum;
  ExchangeRate?: number;
  APAccountRef?: QuickBooksRefDto;
  DepartmentRef?: QuickBooksRefDto;
  TxnDate?: string;
  TotalAmt?: number;
}
