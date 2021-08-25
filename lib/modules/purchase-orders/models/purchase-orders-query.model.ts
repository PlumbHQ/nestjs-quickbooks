import { QuickBooksQueryModel } from '../../common/models';

export interface QuickBooksPurchaseOrdersQuery extends QuickBooksQueryModel {
  DocNumber: string;
}
