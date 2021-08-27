import { QuickBooksDateTimeModel } from './date-time.model';

export interface QuickBooksMetadata {
  CreateTime: QuickBooksDateTimeModel;
  LastUpdatedTime: QuickBooksDateTimeModel;
}

export interface QuickBooksBaseEntity {
  Id: string;
  SyncToken: string;
  MetaData?: QuickBooksMetadata;
}

export interface QuickBooksQueryDto {
  Id?: string;
  MetaData?: QuickBooksMetadata;
}
