import { QuickBooksRefDto } from '.';
import { QuickBooksBillableStatusesEnum } from '../enums';
import { QuickBooksMarkupInfoModel } from '../models';

interface QuickBooksLineDto {
  Id?: string;
  Amount?: number;
  DetailType: string;
  Description?: string;
  LineNum?: number;
}

export interface QuickBooksItemBasedExpenseLineDto extends QuickBooksLineDto {
  DetailType: 'ItemBasedExpenseLineDetail';
  ItemBasedExpenseLineDetail: {
    TaxInclusiveAmt?: number;
    ItemRef?: QuickBooksRefDto;
    CustomerRef?: QuickBooksRefDto;
    PriceLevelRef?: QuickBooksRefDto;
    ClassRef?: QuickBooksRefDto;
    TaxCodeRef?: QuickBooksRefDto;
    MarkupInfo?: QuickBooksMarkupInfoModel;
    BillableStatus?: QuickBooksBillableStatusesEnum;
    Qty?: number;
    UnitPrice?: number;
  };
}

export interface QuickBooksAccountBasedExpenseLineDto
  extends QuickBooksLineDto {
  DetailType: 'AccountBasedExpenseLineDetail';
  AccountBasedExpenseLineDetail: {
    AccountRef: QuickBooksRefDto;
    TaxAmount?: number;
    TaxInclusiveAmt?: number;
    ClassRef?: QuickBooksRefDto;
    TaxCodeRef?: QuickBooksRefDto;
    MarkupInfo?: QuickBooksMarkupInfoModel;
    BillableStatus?: QuickBooksBillableStatusesEnum;
    CustomerRef?: QuickBooksRefDto;
  };
}

export interface QuickBooksSalesItemLineDto extends QuickBooksLineDto {
  DetailType: 'SalesItemLineDetail';
  LineNum: number;
  SalesItemLineDetail: {
    ItemRef: QuickBooksRefDto;
    TaxCodeRef?: QuickBooksRefDto;
    Qty: number;
    UnitPrice: number;
  };
}
