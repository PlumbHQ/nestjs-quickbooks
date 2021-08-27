export interface QuickBooksResponseModel {
  time: string;
}

export interface QuickBooksDeleteResponseModel {
  status: string;
  domain: string;
  Id: string;
}

export interface QuickBooksQueryResponseData {
  [key: string]: number | string;
  startPosition: number;
  maxResults: number;
}

export interface QuickBooksQueryResponseModel extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData;
}
