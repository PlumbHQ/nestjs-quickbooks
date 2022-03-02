import {
  QuickBooksBaseEntity,
  QuickBooksRefModel,
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksAccountBasedExpenseLineDto,
  QuickBooksEmailModel,
  QuickBooksLinkedTxnModel,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksPOStatusEnum,
  QuickBooksPhysicalAddressModel,
  QuickBooksEmailStatusesEnum,
  QuickBooksCustomFieldDto,
} from '../../common';

export interface QuickBooksPurchaseOrderEntity extends QuickBooksBaseEntity {
  APAccountRef: QuickBooksRefModel;
  VendorRef: QuickBooksRefModel;
  Line:
    | QuickBooksItemBasedExpenseLineDto[]
    | QuickBooksAccountBasedExpenseLineDto[];
  CurrencyRef: QuickBooksRefModel;
  CustomField: QuickBooksCustomFieldDto[];
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
