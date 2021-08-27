import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksPurchaseOrderQueryDto
  extends Partial<QuickBooksQueryDto> {
  DocNumber?: string;
}
