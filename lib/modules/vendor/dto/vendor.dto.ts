import {
  QuickBooksEmailDto,
  QuickBooksPhoneNumberDto,
  QuickBooksPhysicalAddressDto,
  QuickBooksRefDto,
  QuickBooksWebsiteDto,
} from '../../common/dto';

export interface QuickBooksVendorPaymentBankDetailDto {
  BankAccountName: string;
  BankBranchIdentifier: string;
  BankAccountNumber: string;
  StatementText: string;
}

export interface QuickBooksVendorDto {
  CompanyName: string;
  Title?: string;
  GivenName?: string;
  MiddleName?: string;
  Suffix?: string;
  FamilyName?: string;
  DisplayName?: string;
  PrimaryEmailAddr?: QuickBooksEmailDto;
  OtherContactInfo?: string;
  APAccountRef?: QuickBooksRefDto;
  TermRef?: QuickBooksRefDto;
  GSTIN?: string;
  Fax?: QuickBooksPhoneNumberDto;
  BusinessNumber?: string;
  HasTPAR?: boolean;
  TaxReportingBasis?: boolean;
  Mobile?: QuickBooksPhoneNumberDto;
  PrimaryPhone?: QuickBooksPhoneNumberDto;
  Active?: boolean;
  AlternatePhone?: QuickBooksPhoneNumberDto;
  Vendor1099?: boolean;
  BillRate?: number;
  WebAddr?: QuickBooksWebsiteDto;
  VendorPaymentBankDetail?: QuickBooksVendorPaymentBankDetailDto;
  TaxIdentifier?: string;
  AcctNum?: string;
  GSTRegistrationType?: string;
  PrintOnCheckName?: string;
  BillAddr?: QuickBooksPhysicalAddressDto;
}

export type CreateQuickBooksVendorDto = QuickBooksVendorDto;
export type FullUpdateQuickBooksVendorDto = QuickBooksVendorDto;
