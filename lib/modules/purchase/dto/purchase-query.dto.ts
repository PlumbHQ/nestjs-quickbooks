import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksPurchaseQueryDto
  extends Partial<QuickBooksQueryDto> {
  DocNumber?: string;
}
