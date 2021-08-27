import {
  QuickBooksBaseEntity,
  QuickBooksRefDto,
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksAccountBasedExpenseLineDto,
  QuickBooksLinkedTxnDto,
  QuickBooksGlobalTaxCalculationsEnum,
} from 'lib';

export interface QuickBooksVendorCreditEntity extends QuickBooksBaseEntity {
  VendorRef: QuickBooksRefDto;
  Line:
    | QuickBooksItemBasedExpenseLineDto[]
    | QuickBooksAccountBasedExpenseLineDto[];
  CurrencyRef: QuickBooksRefDto;
  DocNumber: string;
  PrivateNote: string;
  LinkedTxn: QuickBooksLinkedTxnDto[];
  GlobalTaxCalculation: QuickBooksGlobalTaxCalculationsEnum;
  ExchangeRate: number;
  APAccountRef: QuickBooksRefDto;
  DepartmentRef: QuickBooksRefDto;
  TxnDate: string;
  TotalAmt: number;
}
