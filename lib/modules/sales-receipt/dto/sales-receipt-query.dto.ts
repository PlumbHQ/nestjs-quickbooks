import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksSalesReceiptQueryDto
  extends Partial<QuickBooksQueryDto> {
  DocNumber?: string;
}
