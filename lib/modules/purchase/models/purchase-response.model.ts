import { QuickBooksPurchaseEntity } from '../entities/purchase.entity';
import {
  QuickBooksDeleteResponseData,
  QuickBooksQueryResponseData,
  QuickBooksResponseModel,
} from '../../common/models';

export interface QuickBooksPurchaseResponseModel
  extends QuickBooksResponseModel {
  Purchase: QuickBooksPurchaseEntity;
}

export interface QuickBooksPurchaseQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    Purchase: QuickBooksPurchaseEntity[];
  };
}

export interface QuickBooksPurchaseDeleteResponseModel
  extends QuickBooksResponseModel {
  Purchase: QuickBooksDeleteResponseData;
}
