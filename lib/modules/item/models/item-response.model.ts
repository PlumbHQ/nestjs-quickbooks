import {
  QuickBooksQueryResponseData,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksItemEntity } from '../entities/item.entity';

export interface QuickBooksItemResponseModel {
  Item: QuickBooksItemEntity;
}

export interface QuickBooksItemQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    Item: QuickBooksItemEntity[];
  };
}
