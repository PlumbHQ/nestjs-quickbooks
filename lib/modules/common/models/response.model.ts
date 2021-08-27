export interface QuickBooksResponseDto {
  time: string;
}

export interface QuickBooksDeleteResponseDto {
  status: string;
  domain: string;
  Id: string;
}

export interface QuickBooksQueryResponseDto {
  startPosition: number;
  maxResults: number;
}
