import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksPurchaseQueryDto extends QuickBooksQueryDto {
  DocNumber: string;
}
