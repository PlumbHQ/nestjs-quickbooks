import { QuickBooksCompanyInfoEntity } from '../../company-info';
import { QuickBooksBaseEntity } from './quickbooks.model';

export interface QuickBooksResponseModel {
  [key: string]:
    | QuickBooksCompanyInfoEntity
    | QuickBooksBaseEntity
    | QuickBooksDeleteResponseData
    | QuickBooksQueryResponseData
    | string;
  time: string;
}

export interface QuickBooksDeleteResponseData {
  status: string;
  domain: string;
  Id: string;
}

export interface QuickBooksQueryResponseData {
  [key: string]: number | string | QuickBooksBaseEntity[];
  startPosition: number;
  maxResults: number;
}

export interface QuickBooksQueryResponseModel extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData;
}

export interface QuickBooksDeleteResponseModel extends QuickBooksResponseModel {
  [key: string]: QuickBooksDeleteResponseData | string;
}
