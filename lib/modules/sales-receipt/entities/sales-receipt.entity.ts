import {
  QuickBooksBaseEntity,
  QuickBooksSalesItemLineDto,
  QuickBooksRefDto,
  QuickBooksEmailDto,
  QuickBooksPhysicalAddressDto,
  QuickBooksPrintStatusEnum,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksEmailStatusesEnum,
  QuickBooksTxnTaxDetailDto,
} from '../../common';

export interface QuickBooksSalesReceiptEntity extends QuickBooksBaseEntity {
  Line: QuickBooksSalesItemLineDto[];
  CustomerRef: QuickBooksRefDto;
  CurrencyRef: QuickBooksRefDto;
  BillEmail: QuickBooksEmailDto;
  TxnDate: string; // yyyy/MM/dd
  ShipFromAddr: QuickBooksPhysicalAddressDto;
  ShipDate: string; // yyyy/MM/dd
  TrackingNum: string;
  ClassRef: QuickBooksRefDto;
  PrintStatus: QuickBooksPrintStatusEnum;
  PaymentRefNum: string;
  TxnSource: string;
  GlobalTaxCalculation: QuickBooksGlobalTaxCalculationsEnum;
  DocNumber: string;
  PrivateNote: string;
  DepositToAccountRef: QuickBooksRefDto;
  CustomerMemo: string;
  EmailStatus: QuickBooksEmailStatusesEnum;
  TxnTaxDetail: QuickBooksTxnTaxDetailDto;
  PaymentMethodRef: QuickBooksRefDto;
  ExchangeRate: number;
  ShipAddr: QuickBooksPhysicalAddressDto;
  DepartmentRef: QuickBooksRefDto;
  ShipMethodRef: QuickBooksRefDto;
  BillAddr: QuickBooksPhysicalAddressDto;
  TotalAmt: number;
}
