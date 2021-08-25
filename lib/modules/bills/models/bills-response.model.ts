import {
  QuickBooksDeleteResponseModel,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksBills } from './bills.model';

export interface QuickBooksBillsResponseModel extends QuickBooksResponseModel {
  Bill: QuickBooksBills;
}

export interface QuickBooksBillsQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & { Bill: QuickBooksBills[] };
}

export interface QuickBooksBillsDeleteResponseModel
  extends QuickBooksResponseModel {
  Bill: QuickBooksDeleteResponseModel;
}
