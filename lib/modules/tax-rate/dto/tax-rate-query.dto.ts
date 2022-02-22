import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksTaxRateQueryDto extends Partial<QuickBooksQueryDto> {
  Name: string;
  Active: boolean;
}
