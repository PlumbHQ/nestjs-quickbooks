import {
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksLinkedTxnDto,
  QuickBooksBaseEntity,
  QuickBooksRefDto,
} from 'lib/modules/common';
import {
  QuickBooksAccountBasedExpenseLine,
  QuickBooksItemBasedExpenseLine,
} from 'lib/modules/common/dto/line-items.dto';

export interface QuickBooksVendorCreditEntity extends QuickBooksBaseEntity {
  VendorRef: QuickBooksRefDto;
  Line: QuickBooksItemBasedExpenseLine[] | QuickBooksAccountBasedExpenseLine[];
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
