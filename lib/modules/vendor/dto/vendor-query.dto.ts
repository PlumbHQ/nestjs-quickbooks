import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksVendorQueryDto extends Partial<QuickBooksQueryDto> {
  DisplayName?: string;
  GivenName?: string;
  MiddleName?: string;
  FamilyName?: string;
  Suffix?: string;
  Active?: boolean;
  Balance?: number;
  CompanyName?: string;
  PrintOnCheckName?: string;
}
