export enum QuickBooksScopes {
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

export type QuickbooksModes = 'production' | 'sandbox';

export interface QuickBooksConfigModel {
  clientId: string;
  clientSecret: string;
  scopes: QuickBooksScopes[];
  mode: QuickbooksModes;
  serverUrl: string;
  authRedirectUrl: string;
}

export class QuickBooksConfigModel {
  public clientId: string;
  public clientSecret: string;
  public scopes: QuickBooksScopes[];
  public mode: QuickbooksModes;
  public serverUrl: string;
  public authRedirectUrl: string;

  constructor(config: Partial<QuickBooksConfigModel>) {
    Object.assign(this, config);
  }
}
