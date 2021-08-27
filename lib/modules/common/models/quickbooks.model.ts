import { QuickBooksDateTimeModel } from './date-time.model';

export interface QuickBooksMetadata {
  CreateTime: QuickBooksDateTimeModel;
  LastUpdatedTime: QuickBooksDateTimeModel;
}

export interface QuickBooksEntity {
  Id: string;
  SyncToken: string;
  MetaData?: QuickBooksMetadata;
}

export interface QuickBooksQueryModel {
  Id: string;
  MetaData: QuickBooksMetadata;
}
