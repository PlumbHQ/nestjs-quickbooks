export enum NestJsQuickBooksScopes {
  Accounting = 'com.intuit.quickbooks.accounting',
  Payment = 'com.intuit.quickbooks.payment',
  Payroll = 'com.intuit.quickbooks.payroll',
  TimeTracking = 'com.intuit.quickbooks.payroll.timetracking',
  Benefits = 'com.intuit.quickbooks.payroll.benefits',
  Profile = 'profile',
  Email = 'email',
  Phone = 'phone',
  Address = 'address',
  OpenId = 'openid',
  IntuitName = 'intuit_name',
}

export type NestJsQuickbooksModes = 'production' | 'sandbox';

export interface NestJsQuickBooksConfigModel {
  clientId: string;
  clientSecret: string;
  scopes: NestJsQuickBooksScopes[];
  mode: NestJsQuickbooksModes;
  serverUrl: string;
  authRedirectUrl: string;
}

export class NestJsQuickBooksConfigModel {
  public clientId: string;
  public clientSecret: string;
  public scopes: NestJsQuickBooksScopes[];
  public mode: NestJsQuickbooksModes;
  public serverUrl: string;
  public authRedirectUrl: string;

  constructor(config: Partial<NestJsQuickBooksConfigModel>) {
    Object.assign(this, config);
  }
}
