import {
  QuickBooksItemBasedExpenseLineDto,
  QuickBooksPaymentTypesEnum,
  QuickBooksPrintStatusEnum,
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksLinkedTxnDto,
  QuickBooksPhysicalAddressDto,
  QuickBooksRefDto,
  QuickBooksTaxRateDetailModel,
} from '../../common';

export interface QuickBooksPurchaseDto {
  Line: QuickBooksItemBasedExpenseLineDto[];
  PaymentType: QuickBooksPaymentTypesEnum;
  AccountRef: QuickBooksRefDto;
  CurrencyRef: QuickBooksRefDto;
  TxnDate?: string;
  PrintStatus?: QuickBooksPrintStatusEnum;
  RemitToAddr?: QuickBooksPhysicalAddressDto;
  TxnSource?: string;
  LinkedTxn?: QuickBooksLinkedTxnDto[];
  GlobalTaxCalculation?: QuickBooksGlobalTaxCalculationsEnum;
  DocNumber?: string;
  Credit?: boolean;
  PrivateNote?: string;
  TxnTaxDetail?: QuickBooksTaxRateDetailModel;
  PaymentMethodRef?: QuickBooksRefDto;
  DepartmentRef?: QuickBooksRefDto;
  EntityRef?: QuickBooksRefDto;
  TotalAmt?: number;
}
