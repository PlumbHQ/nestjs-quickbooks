import { QuickBooksPurchaseEntity } from '../entities/purchase.entity';
import {
  QuickBooksDeleteResponseModel,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';

export interface QuickBooksPurchaseResponseModel
  extends QuickBooksResponseModel {
  Purchase: QuickBooksPurchaseEntity;
}

export interface QuickBooksPurchaseQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Purchase: QuickBooksPurchaseEntity[];
  };
}

export interface QuickBooksPurchaseDeleteResponseModel
  extends QuickBooksResponseModel {
  Purchase: QuickBooksDeleteResponseModel;
}
