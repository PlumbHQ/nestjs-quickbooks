import { QuickBooksQueryModel } from '../../common/models';

export interface QuickBooksSalesReceiptsQuery extends QuickBooksQueryModel {
  DocNumber: string;
}
