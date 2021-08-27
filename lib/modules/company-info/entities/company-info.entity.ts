import {
  QuickBooksDateTimeModel,
  QuickBooksEmailModel,
  QuickBooksBaseEntity,
  QuickBooksPhoneNumberModel,
  QuickBooksPhysicalAddressModel,
  QuickBooksWebsiteModel,
} from '../../common/models';
import { QuickBooksMonthsEnum } from '../../common/enums';

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
