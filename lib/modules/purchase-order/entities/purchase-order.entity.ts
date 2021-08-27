import {
  QuickBooksBaseEntity,
  QuickBooksEmailModel,
  QuickBooksLinkedTxnModel,
  QuickBooksPhysicalAddressModel,
  QuickBooksRefModel,
} from '../../common/models';
import {
  QuickBooksAccountBasedExpenseLine,
  QuickBooksItemBasedExpenseLine,
} from '../../common/dto';
import {
  QuickBooksPOStatusEnum,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksEmailStatusesEnum,
} from '../../common/enums';

export interface QuickBooksPurchaseOrderEntity extends QuickBooksBaseEntity {
  APAccountRef: QuickBooksRefModel;
  VendorRef: QuickBooksRefModel;
  Line: QuickBooksItemBasedExpenseLine[] | QuickBooksAccountBasedExpenseLine[];
  CurrencyRef: QuickBooksRefModel;
  TxnDate: string;
  POEmail: QuickBooksEmailModel;
  ClassRef: QuickBooksRefModel;
  SalesTermRef: QuickBooksRefModel;
  LinkedTxn: QuickBooksLinkedTxnModel[];
  GlobalTaxCalculation: QuickBooksGlobalTaxCalculationsEnum;
  Memo: string;
  POStatus: QuickBooksPOStatusEnum;
  DueDate: string;
  DocNumber: string;
  PrivateNote: string;
  ShipMethodRef: QuickBooksRefModel;
  ShipTo: QuickBooksRefModel;
  ExchangeRate: number;
  ShipAddr: QuickBooksPhysicalAddressModel;
  VendorAddr: QuickBooksPhysicalAddressModel;
  TotalAmt: number;
  EmailStatus: QuickBooksEmailStatusesEnum;
}
