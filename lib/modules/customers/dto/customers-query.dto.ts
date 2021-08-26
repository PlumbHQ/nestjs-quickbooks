import { QuickBooksQueryModel } from '../../common/models';

export interface QuickBooksCustomerQueryDto
  extends Partial<QuickBooksQueryModel> {
  DisplayName?: string;
  GivenName?: string;
  MiddleName?: string;
  FamilyName?: string;
  PrimaryEmailAddr?: string;
  Active?: boolean;
  Balance?: number;
  CompanyName?: string;
  PrintOnCheckName?: string;
  FullyQualifiedName?: string;
}
