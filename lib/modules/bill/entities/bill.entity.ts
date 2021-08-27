import {
  QuickBooksLinkedTxnModel,
  QuickBooksBaseEntity,
  QuickBooksRefModel,
  QuickBooksTxnTaxDetailModel,
} from '../../common/models';
import { QuickBooksGlobalTaxCalculationsEnum } from '../../common/enums';
import {
  QuickBooksAccountBasedExpenseLine,
  QuickBooksItemBasedExpenseLine,
} from 'lib/modules/common/dto/line-items.dto';

export interface QuickBooksBillEntity extends QuickBooksBaseEntity {
  VendorRef: QuickBooksRefModel;
  Line: QuickBooksItemBasedExpenseLine[] | QuickBooksAccountBasedExpenseLine[];
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
