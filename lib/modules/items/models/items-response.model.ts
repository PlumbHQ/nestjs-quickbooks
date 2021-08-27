import {
  QuickBooksQueryResponseDto,
  QuickBooksResponseDto,
} from '../../common/models';
import { QuickBooksItems } from './items.model';

export interface QuickBooksItemsResponseDto {
  Item: QuickBooksItems;
}

export interface QuickBooksItemsQueryResponseDto extends QuickBooksResponseDto {
  QueryResponse: QuickBooksQueryResponseDto & { Item: QuickBooksItems[] };
}
