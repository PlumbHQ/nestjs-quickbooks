import { QuickBooksBaseEntity, QuickBooksRefDto } from '../../common';

export interface QuickBooksTaxRateEntity extends QuickBooksBaseEntity {
  Name: string;
  Description: string;
  Active: boolean;
  RateValue: number;
  AgencyRef: QuickBooksRefDto;
  TaxReturnLineRef: QuickBooksRefDto;
  EffectiveTaxRate: {
    RateValue: number;
    EffectiveDate: string;
  }[];
  SpecialTaxType: string;
}
