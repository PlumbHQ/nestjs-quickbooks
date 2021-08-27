import { QuickBooksRefDto } from '.';
import { QuickBooksBillableStatusesEnum } from '../enums';
import { QuickBooksMarkupInfoModel } from '../models';

interface QuickBooksLine {
  Id?: string;
  Amount?: number;
  DetailType: string;
  Description?: string;
  LineNum?: number;
}

export interface QuickBooksItemBasedExpenseLine extends QuickBooksLine {
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

export interface QuickBooksAccountBasedExpenseLine extends QuickBooksLine {
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

export interface QuickBooksSalesItemLine extends QuickBooksLine {
  DetailType: 'SalesItemLineDetail';
  LineNum: number;
  SalesItemLineDetail: {
    ItemRef: QuickBooksRefDto;
    TaxCodeRef?: QuickBooksRefDto;
    Qty: number;
    UnitPrice: number;
  };
}
