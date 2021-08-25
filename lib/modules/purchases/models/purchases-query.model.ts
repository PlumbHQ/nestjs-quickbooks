import { QuickBooksQueryModel } from '../../common/models';

export interface QuickBooksPurchasesQuery extends QuickBooksQueryModel {
  DocNumber: string;
}
