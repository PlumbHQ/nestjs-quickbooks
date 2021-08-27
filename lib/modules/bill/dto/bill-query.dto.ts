import { QuickBooksQueryDto, QuickBooksRefModel } from '../../common/models';

export interface QuickBooksBillsQueryDto extends QuickBooksQueryDto {
  VendorRef: QuickBooksRefModel;
  TxnDate: string;
  APAccountRef: QuickBooksRefModel;
  SalesTermRef: QuickBooksRefModel;
  TotalAmt: number;
  DueDate: string;
  DocNumber: string;
  Balance: number;
}
