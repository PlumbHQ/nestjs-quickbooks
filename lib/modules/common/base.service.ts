import { Injectable } from '@nestjs/common';
import { QuickBooksAuthService } from '../auth/services/auth.service';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { WhereOptions } from './models';
import { QueryUtils } from '../../utils/query.utils';
import { HttpService } from '@nestjs/axios';
import { QuickBooksStore } from '../store';
import * as querystring from 'querystring';

@Injectable()
export abstract class BaseService<Response, Query, QueryResponse> {
  public resource: string;

  private readonly sandboxUrl = 'https://sandbox-quickbooks.api.intuit.com';
  private readonly liveUrl = 'https://quickbooks.api.intuit.com';

  constructor(
    private readonly authService: QuickBooksAuthService,
    private readonly tokenStore: QuickBooksStore,
    private readonly http: HttpService,
  ) {}

  protected getRealm(): Observable<string> {
    return from(this.tokenStore.getToken().then((token) => token?.realmId));
  }

  protected get apiUrl(): string {
    return this.authService.mode === 'production'
      ? this.liveUrl
      : this.sandboxUrl;
  }

  public query(condition: WhereOptions<Query>): Observable<QueryResponse> {
    return this.getHttpHeaders()
      .pipe(
        mergeMap((authHeaders) =>
          this.queryUrl(condition).pipe(
            mergeMap((url) =>
              this.http.get<QueryResponse>(url, {
                headers: {
                  ...authHeaders,
                },
              }),
            ),
          ),
        ),
      )
      .pipe(map((x) => x.data));
  }

  protected get<R = Response>(
    path?: string,
    queryParams?: Record<string, any>,
    headers?: Record<string, any>,
  ): Observable<R> {
    return this.getHttpHeaders()
      .pipe(
        mergeMap((authHeaders) =>
          this.url(path, queryParams).pipe(
            mergeMap((url) =>
              this.http.get<R>(url, {
                headers: {
                  ...authHeaders,
                  ...headers,
                },
              }),
            ),
          ),
        ),
      )
      .pipe(map((x) => x.data));
  }

  protected post<R = Response>(
    body: any,
    path?: string,
    queryParams?: Record<string, any>,
    headers?: Record<string, any>,
  ): Observable<R> {
    return this.getHttpHeaders()
      .pipe(
        mergeMap((authHeaders) =>
          this.url(path, queryParams).pipe(
            mergeMap((url) =>
              this.http.post<R>(url, body, {
                headers: {
                  ...authHeaders,
                  ...headers,
                },
              }),
            ),
          ),
        ),
      )
      .pipe(map((x) => x.data));
  }

  protected queryUrl(condition: WhereOptions<any>): Observable<string> {
    return this.getRealm().pipe(
      map(
        (realm) =>
          `${this.apiUrl}/v3/company/${realm}/query?${QueryUtils.generateQuery(
            this.resource,
            condition,
          )}`,
      ),
    );
  }

  protected url(
    path: string,
    queryParams?: Record<string, any>,
  ): Observable<string> {
    const query = queryParams
      ? `?${querystring.stringify(
          queryParams as querystring.ParsedUrlQueryInput,
        )}`
      : '';

    return this.getRealm().pipe(
      map((realm) => {
        let url: string;

        if (!path) {
          url = `${this.apiUrl}/v3/company/${realm}/${this.resource}${query}`;
        } else {
          url = `${this.apiUrl}/v3/company/${realm}/${this.resource}/${path}${query}`;
        }

        return url;
      }),
    );
  }

  private getHttpHeaders(): Observable<any> {
    return this.authService.getToken().pipe(
      map((token) => ({
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      })),
    );
  }
}
