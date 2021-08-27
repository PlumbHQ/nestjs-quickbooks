export interface QuickBooksResponseModel {
  [key: string]: Record<string, any> | string;
  QueryResponse?: Record<string, any>;
  time: string;
}

export interface QuickBooksDeleteResponseModel {
  status: string;
  domain: string;
  Id: string;
}

export interface QuickBooksQueryResponseModel {
  startPosition: number;
  maxResults: number;
}
