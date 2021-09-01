import { NestJsQuickBooksError } from './quick-books.error';

export interface NestJSQuickBooksHttpError {
  Fault: {
    Error: {
      Message: string;
      Detail: string;
      code: string;
      element: string;
    }[];
    type: string;
  };
  time: string;
}

export class NestJsQuickBooksHttpError extends NestJsQuickBooksError {
  public errors: {
    Message: string;
    Detail: string;
    code: string;
    element: string;
  }[];
  public time: string;
  public status: number;

  constructor(data: NestJSQuickBooksHttpError, status: number) {
    super();

    this.status = status;
    this.message = data.Fault.type;
    this.errors = data.Fault.Error;
    this.time = data.time;
  }
}
