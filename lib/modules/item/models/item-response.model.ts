import {
  QuickBooksQueryResponseData,
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksItemEntity } from '../entities/item.entity';

export interface QuickBooksItemResponseModel extends QuickBooksResponseModel {
  Item: QuickBooksItemEntity;
}

export interface QuickBooksItemQueryResponseModel
  extends QuickBooksQueryResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    Item: QuickBooksItemEntity[];
  };
}
