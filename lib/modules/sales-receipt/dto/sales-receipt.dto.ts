import {
  QuickBooksRefDto,
  QuickBooksEmailDto,
  QuickBooksPhysicalAddressDto,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksEmailStatusesEnum,
  QuickBooksTxnTaxDetailDto,
  QuickBooksSalesItemLineDto,
  QuickBooksPrintStatusEnum,
} from '../../common';

export interface QuickBooksSalesReceiptDto {
  Line: QuickBooksSalesItemLineDto[];
  CurrencyRef: QuickBooksRefDto;
  CustomerRef?: QuickBooksRefDto;
  BillEmail?: QuickBooksEmailDto;
  TxnDate?: string; // yyyy/MM/dd
  ShipFromAddr?: QuickBooksPhysicalAddressDto;
  ShipDate?: string; // yyyy/MM/dd
  TrackingNum?: string;
  ClassRef?: QuickBooksRefDto;
  PrintStatus?: QuickBooksPrintStatusEnum;
  PaymentRefNum?: string;
  TxnSource?: string;
  GlobalTaxCalculation?: QuickBooksGlobalTaxCalculationsEnum;
  DocNumber?: string;
  PrivateNote?: string;
  DepositToAccountRef?: QuickBooksRefDto;
  CustomerMemo?: string;
  EmailStatus?: QuickBooksEmailStatusesEnum;
  TxnTaxDetail?: QuickBooksTxnTaxDetailDto;
  PaymentMethodRef?: QuickBooksRefDto;
  ExchangeRate?: number;
  ShipAddr?: QuickBooksPhysicalAddressDto;
  DepartmentRef?: QuickBooksRefDto;
  ShipMethodRef?: QuickBooksRefDto;
  BillAddr?: QuickBooksPhysicalAddressDto;
  TotalAmt?: number;
}
