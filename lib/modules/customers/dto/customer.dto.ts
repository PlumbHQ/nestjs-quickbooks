import {
  QuickBooksDateDto,
  QuickBooksEmailDto,
  QuickBooksPhoneNumberDto,
  QuickBooksPhysicalAddressDto,
  QuickBooksRefDto,
  QuickBooksWebsiteDto,
} from '../../common/dto';
import {
  QuickBooksDeliveryMethodsEnum,
  QuickBooksTaxExemptionReasonsEnum,
} from '../../common/enums';

export interface QuickBooksCustomerDto {
  GivenName: string;
  FamilyName: string;
  PrimaryEmailAddr: QuickBooksEmailDto;
  DisplayName?: string;
  Title?: string;
  MiddleName?: string;
  Suffix?: string;
  ResaleNum?: string;
  SecondaryTaxIdentifier?: string;
  ARAccountRef?: QuickBooksRefDto;
  DefaultTaxCodeRef?: QuickBooksRefDto;
  PreferredDeliveryMethod?: QuickBooksDeliveryMethodsEnum;
  GSTIN?: string;
  SalesTermRef?: QuickBooksRefDto;
  CustomerTypeRef?: string;
  Fax?: QuickBooksPhoneNumberDto;
  BusinessNumber?: string;
  BillWithParent?: boolean;
  CurrencyRef?: QuickBooksRefDto;
  Mobile?: QuickBooksPhoneNumberDto;
  Job?: boolean;
  BalanceWithJobs?: number;
  PrimaryPhone?: QuickBooksPhoneNumberDto;
  OpenBalanceDate?: QuickBooksDateDto;
  Taxable?: number;
  AlternatePhone?: QuickBooksPhoneNumberDto;
  ParentRef?: QuickBooksRefDto;
  Notes?: string;
  WebAddr?: QuickBooksWebsiteDto;
  Active?: boolean;
  Balance?: number;
  ShipAddr?: QuickBooksPhysicalAddressDto;
  PaymentMethodRef?: QuickBooksRefDto;
  IsProject?: boolean;
  CompanyName?: string;
  PrimaryTaxIdentifier?: string;
  GTSRegistrationType?: string;
  PrintOnCheckName?: string;
  BillAddr?: QuickBooksPhysicalAddressDto;
  FullyQualifiedName?: string;
  Level?: number;
  TaxExemptionReasonId?: QuickBooksTaxExemptionReasonsEnum;
}

export type CreateQuickBooksCustomerDto = QuickBooksCustomerDto;
export type FullUpdateQuickBooksCustomerDto = QuickBooksCustomerDto;
export type SparseUpdateQuickBooksCustomerDto = QuickBooksCustomerDto;
