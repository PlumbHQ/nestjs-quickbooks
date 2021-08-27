import {
  QuickBooksGlobalTaxCalculationsEnum,
  QuickBooksLinkedTxnDto,
  QuickBooksPhysicalAddressDto,
  QuickBooksRefDto,
  QuickBooksTaxRateDetailModel,
} from 'lib/modules/common';
import { QuickBooksItemBasedExpenseLineDto } from 'lib/modules/common/dto/line-items.dto';
import { QuickBooksPaymentTypesEnum } from 'lib/modules/common/enums/payment-types.enum';
import { QuickBooksPrintStatusEnum } from 'lib/modules/common/enums/print-status.enum';

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
