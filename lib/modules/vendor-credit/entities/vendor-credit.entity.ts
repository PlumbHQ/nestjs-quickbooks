import {
  QuickBooksRefDto,
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksAccountBasedExpenseLineDto,
  QuickBooksLinkedTxnDto,
  QuickBooksGlobalTaxCalculationsEnum,
} from 'lib';
import { QuickBooksBaseEntity } from '../../common/models';

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
