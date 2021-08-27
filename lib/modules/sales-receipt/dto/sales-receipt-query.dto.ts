import { QuickBooksQueryDto } from '../../common/models';

export interface QuickBooksSalesReceiptQueryDto extends QuickBooksQueryDto {
  DocNumber: string;
}
