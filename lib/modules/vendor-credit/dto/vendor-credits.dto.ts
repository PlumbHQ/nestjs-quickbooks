import {
  QuickBooksRefDto,
  QuickBooksLinkedTxnDto,
  QuickBooksGlobalTaxCalculationsEnum,
} from 'lib/modules/common';
import {
  QuickBooksItemBasedExpenseLine,
  QuickBooksAccountBasedExpenseLine,
} from 'lib/modules/common/dto/line-items.dto';

export interface QuickBooksVendorCreditDto {
  VendorRef: QuickBooksRefDto;
  Line: QuickBooksItemBasedExpenseLine[] | QuickBooksAccountBasedExpenseLine[];
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
