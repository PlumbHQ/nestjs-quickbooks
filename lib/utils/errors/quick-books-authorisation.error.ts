import { NestJsQuickBooksError } from './quick-books.error';

export class NestJsQuickBooksAuthorisationError extends NestJsQuickBooksError {
  message = 'QuickBooks Not Authorised';
}
