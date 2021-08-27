import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksPurchaseOrderQueryDto extends QuickBooksQueryDto {
  DocNumber: string;
}
