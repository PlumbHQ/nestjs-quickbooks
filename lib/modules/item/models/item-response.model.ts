import {
  QuickBooksQueryResponseModel,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksItemEntity } from '../entities/item.entity';

export interface QuickBooksItemResponseModel {
  Item: QuickBooksItemEntity;
}

export interface QuickBooksItemQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseModel & {
    Item: QuickBooksItemEntity[];
  };
}
