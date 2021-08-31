import {
  QuickBooksBaseEntity,
  QuickBooksPhysicalAddressModel,
  QuickBooksEmailModel,
  QuickBooksWebsiteModel,
  QuickBooksMonthsEnum,
  QuickBooksPhoneNumberModel,
  QuickBooksDateTimeModel,
} from '../../common';

export interface QuickBooksCompanyInfoEntity extends QuickBooksBaseEntity {
  CompanyName: string;
  PhysicalAddress: QuickBooksPhysicalAddressModel;
  LegalAddr: QuickBooksPhysicalAddressModel;
  SupportedLanguages: string;
  Country: string;
  Email: QuickBooksEmailModel;
  WebAddr: QuickBooksWebsiteModel;
  NameValue: { name: string; value: string }[];
  FiscalYearStartMonth: QuickBooksMonthsEnum;
  CustomerCommunicationAddr: QuickBooksPhysicalAddressModel;
  PrimaryPhone: QuickBooksPhoneNumberModel;
  LegalName: string;
  CompanyStartDate: QuickBooksDateTimeModel;
}
