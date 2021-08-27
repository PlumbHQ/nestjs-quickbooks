import {
  QuickBooksBaseEntity,
  QuickBooksEmailModel,
  QuickBooksContactInfoModel,
  QuickBooksRefModel,
  QuickBooksPhoneNumberModel,
  QuickBooksTaxReportingBasesEnum,
  QuickBooksWebsiteModel,
  QuickBooksPhysicalAddressModel,
} from 'lib';

export interface QuickBooksVendorPaymentBankDetailModel {
  BankAccountName: string;
  BankBranchIdentifier: string;
  BankAccountNumber: string;
  StatementText: string;
}

export interface QuickBooksVendorEntity extends QuickBooksBaseEntity {
  Title: string;
  GivenName: string;
  MiddleName: string;
  Suffix: string;
  FamilyName: string;
  PrimaryEmailAddr: QuickBooksEmailModel;
  DisplayName: string;
  OtherContactInfo: QuickBooksContactInfoModel;
  APAccountRef: QuickBooksRefModel;
  TermRef: QuickBooksRefModel;
  GSTIN: string;
  Fax: QuickBooksPhoneNumberModel;
  BusinessNumber: string;
  CurrencyRef: QuickBooksRefModel;
  HasTPAR: boolean;
  TaxReportingBasis: QuickBooksTaxReportingBasesEnum;
  Mobile: QuickBooksPhoneNumberModel;
  PrimaryPhone: QuickBooksPhoneNumberModel;
  Active: boolean;
  AlternatePhone: QuickBooksPhoneNumberModel;
  Vendor1099: boolean;
  BillRate: number;
  WebAddr: QuickBooksWebsiteModel;
  CompanyName: string;
  VendorPaymentBankDetail: QuickBooksVendorPaymentBankDetailModel;
  TaxIdentifier: string;
  AcctNum: string;
  GSTRegistrationType: string;
  PrintOnCheckName: string;
  BillAddr: QuickBooksPhysicalAddressModel;
  Balance: number;
}
