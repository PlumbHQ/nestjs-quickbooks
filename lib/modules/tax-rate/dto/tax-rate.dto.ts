import { QuickBooksRefDto } from '../../common/dto';

export interface QuickBooksTaxRateDto {
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
