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
} from 'lib/modules/common/dto/line-items.dto';
import { QuickBooksPOStatusEnum } from 'lib/modules/common/enums/po-status.enum';
import {
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksEmailStatusesEnum,
} from 'lib';

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
