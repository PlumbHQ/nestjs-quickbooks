import {
  QuickBooksBaseEntity,
  QuickBooksRefModel,
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksAccountBasedExpenseLineDto,
  QuickBooksLinkedTxnModel,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksTxnTaxDetailModel,
} from '../../common';

export interface QuickBooksBillEntity extends QuickBooksBaseEntity {
  VendorRef: QuickBooksRefModel;
  Line:
    | QuickBooksItemBasedExpenseLineDto[]
    | QuickBooksAccountBasedExpenseLineDto[];
  CurrencyRef?: QuickBooksRefModel;
  TxnDate?: string;
  APAccountRef?: QuickBooksRefModel;
  SalesTermRef?: QuickBooksRefModel;
  LinkedTxn?: QuickBooksLinkedTxnModel[];
  GlobalTaxCalculation?: QuickBooksGlobalTaxCalculationsEnum;
  TotalAmt?: number;
  TransactionLocationType?: string;
  DueDate?: string;
  DocNumber?: string;
  PrivateNote?: string;
  TxnTaxDetail?: QuickBooksTxnTaxDetailModel;
  ExchangeRate?: number;
  DepartmentRef?: QuickBooksRefModel;
  IncludeInAnnualTPAR?: boolean;
  HomeBalance: number;
  Balance: number;
}
