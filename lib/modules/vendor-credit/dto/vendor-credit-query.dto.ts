import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksVendorCreditQueryDto
  extends Partial<QuickBooksQueryDto> {
  DocNumber?: string;
}
