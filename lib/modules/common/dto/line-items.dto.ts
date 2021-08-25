import { QuickBooksRefDto } from '.';

interface QuickBooksLine {
  Amount?: number;
  Description?: string;
}

export interface QuickBooksItemBasedExpenseLine extends QuickBooksLine {
  DetailType: 'ItemBasedExpenseLineDetail';
  ItemBasedExpenseLineDetail: {
    ItemRef: QuickBooksRefDto;
    Qty: number;
    UnitPrice: number;
    TaxCodeRef: QuickBooksRefDto;
  };
}

export interface QuickBooksAccountBasedExpenseLine extends QuickBooksLine {
  DetailType: 'AccountBasedExpenseLineDetail';
  AccountBasedExpenseLineDetail: {
    AccountRef: QuickBooksRefDto;
    TaxCodeRef: QuickBooksRefDto;
  };
}

export interface QuickBooksSalesItemLine extends QuickBooksLine {
  DetailType: 'SalesItemLineDetail';
  LineNum: string;
  SalesItemLineDetail: {
    ItemRef: QuickBooksRefDto;
    TaxCodeRef?: QuickBooksRefDto;
    Qty: number;
    UnitPrice: number;
  };
}
