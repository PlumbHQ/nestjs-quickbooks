import {
  QuickBooksRefDto,
  QuickBooksEmailDto,
  QuickBooksLinkedTxnDto,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksPhysicalAddressDto,
  QuickBooksEmailStatusesEnum,
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksAccountBasedExpenseLineDto,
  QuickBooksPOStatusEnum,
} from '../../common';

export interface QuickBooksPurchaseOrderDto {
  APAccountRef: QuickBooksRefDto;
  VendorRef: QuickBooksRefDto;
  Line:
    | QuickBooksItemBasedExpenseLineDto[]
    | QuickBooksAccountBasedExpenseLineDto[];
  CurrencyRef: QuickBooksRefDto;
  TxnDate?: string;
  POEmail?: QuickBooksEmailDto;
  ClassRef?: QuickBooksRefDto;
  SalesTermRef?: QuickBooksRefDto;
  LinkedTxn?: QuickBooksLinkedTxnDto[];
  GlobalTaxCalculation?: QuickBooksGlobalTaxCalculationsEnum;
  Memo?: string;
  POStatus?: QuickBooksPOStatusEnum;
  DueDate?: string;
  DocNumber?: string;
  PrivateNote?: string;
  ShipMethodRef?: QuickBooksRefDto;
  ShipTo?: QuickBooksRefDto;
  ExchangeRate?: number;
  ShipAddr?: QuickBooksPhysicalAddressDto;
  VendorAddr?: QuickBooksPhysicalAddressDto;
  TotalAmt?: number;
  EmailStatus?: QuickBooksEmailStatusesEnum;
}
