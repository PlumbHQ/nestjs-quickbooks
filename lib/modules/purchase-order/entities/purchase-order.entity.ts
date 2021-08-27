import {
  QuickBooksEmailDto,
  QuickBooksEmailStatusesEnum,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksLinkedTxnDto,
  QuickBooksBaseEntity,
  QuickBooksPhysicalAddressDto,
  QuickBooksRefDto,
} from 'lib/modules/common';
import {
  QuickBooksAccountBasedExpenseLine,
  QuickBooksItemBasedExpenseLine,
} from 'lib/modules/common/dto/line-items.dto';
import { QuickBooksPOStatusEnum } from 'lib/modules/common/enums/po-status.enum';

export interface QuickBooksPurchaseOrderEntity extends QuickBooksBaseEntity {
  APAccountRef: QuickBooksRefDto;
  VendorRef: QuickBooksRefDto;
  Line: QuickBooksItemBasedExpenseLine[] | QuickBooksAccountBasedExpenseLine[];
  CurrencyRef: QuickBooksRefDto;
  TxnDate: string;
  POEmail: QuickBooksEmailDto;
  ClassRef: QuickBooksRefDto;
  SalesTermRef: QuickBooksRefDto;
  LinkedTxn: QuickBooksLinkedTxnDto[];
  GlobalTaxCalculation: QuickBooksGlobalTaxCalculationsEnum;
  Memo: string;
  POStatus: QuickBooksPOStatusEnum;
  DueDate: string;
  DocNumber: string;
  PrivateNote: string;
  ShipMethodRef: QuickBooksRefDto;
  ShipTo: QuickBooksRefDto;
  ExchangeRate: number;
  ShipAddr: QuickBooksPhysicalAddressDto;
  VendorAddr: QuickBooksPhysicalAddressDto;
  TotalAmt: number;
  EmailStatus: QuickBooksEmailStatusesEnum;
}
