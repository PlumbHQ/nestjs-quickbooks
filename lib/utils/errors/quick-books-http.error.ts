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

    const fixed = this.convertKeysToLower(data) as any;

    this.status = status;
    this.message = fixed.fault.type;
    this.errors = fixed.fault.Error;
    this.time = fixed.time;
  }

  convertKeysToLower(object) {
    return Object.keys(object).reduce((newObj, key) => {
      const val = object[key];
      const newVal =
        typeof val === 'object' ? this.convertKeysToLower(val) : val;
      newObj[key.toLowerCase()] = newVal;
      return newObj;
    }, {});
  }
}
