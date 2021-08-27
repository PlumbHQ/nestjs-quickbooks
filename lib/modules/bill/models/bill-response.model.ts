import {
  QuickBooksDeleteResponseModel,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksBillEntity } from '../entities/bill.entity';

export interface QuickBooksBillResponseModel extends QuickBooksResponseModel {
  Bill: QuickBooksBillEntity;
}

export interface QuickBooksBillQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Bill: QuickBooksBillEntity[];
  };
}

export interface QuickBooksBillDeleteResponseModel
  extends QuickBooksResponseModel {
  Bill: QuickBooksDeleteResponseModel;
}
