import { NestJsQuickBooksError } from './quick-books.error';

export interface IQuickBooksError {
  Message: string;
  Detail: string;
  code: string;
  element: string;
}

export interface IQuickBooksErrorResponse {
  errors: IQuickBooksError[];
  time: string;
  status: number;
}

export interface IQuickBooksHttpError {
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

export interface INestJSQuickBooksHttpError {
  message: string;
  detail: string;
  code: string;
}

export class NestJsQuickBooksHttpError extends NestJsQuickBooksError {
  public time: string;
  public type: string;
  public status: number;
  public errors: INestJSQuickBooksHttpError[];

  constructor(errorData: IQuickBooksHttpError, status: number) {
    super();

    this.message = errorData.Fault.type;
    this.status = status;
    this.type = errorData.Fault.type;
    this.time = errorData.time;

    this.errors = errorData.Fault.Error.map(
      (Error): INestJSQuickBooksHttpError => ({
        message: Error.Message,
        detail: Error.Detail,
        code: Error.code,
      }),
    );
  }
}
