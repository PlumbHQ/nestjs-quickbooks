import { TokensModel } from 'lib/modules/auth';

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
export enum NestJsQuickbooksModesEnum {
  Production = 'production',
  Sandbox = 'sandbox',
}

export interface NestJsQuickBooksConfigModel {
  clientId: string;
  clientSecret: string;
  scopes: NestJsQuickBooksScopes[];
  mode: NestJsQuickbooksModes;
  serverUrl: string;
  authRedirectUrl: string;
  store: {
    getToken: () => Promise<TokensModel>;
    setToken: (tokenData: TokensModel) => Promise<void>;
    unsetToken: () => Promise<void>;
  };
}

export class NestJsQuickBooksConfigModel {
  public clientId: string;
  public clientSecret: string;
  public scopes: NestJsQuickBooksScopes[];
  public mode: NestJsQuickbooksModes;
  public serverUrl: string;
  public authRedirectUrl: string;
  public store: {
    getToken: () => Promise<TokensModel>;
    setToken: (tokenData: TokensModel) => Promise<void>;
    unsetToken: () => Promise<void>;
  };

  constructor(config: Partial<NestJsQuickBooksConfigModel>) {
    Object.assign(this, config);
  }
}
