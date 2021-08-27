import { QuickBooksCompanyInfoEntity } from 'lib';
import { QuickBooksEntity } from './quickbooks.model';

export interface QuickBooksResponseModel {
  [key: string]:
    | QuickBooksCompanyInfoEntity
    | QuickBooksDeleteResponseModel
    | QuickBooksEntity
    | QuickBooksQueryResponseData
    | string;
  time: string;
}

export interface QuickBooksDeleteResponseModel {
  status: string;
  domain: string;
  Id: string;
}

export interface QuickBooksQueryResponseData {
  [key: string]: number | string | QuickBooksEntity[];
  startPosition: number;
  maxResults: number;
}

export interface QuickBooksQueryResponseModel extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData;
}
