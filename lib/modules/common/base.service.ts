import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksAuthService } from '../auth/services/auth.service';
import { firstValueFrom, from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WhereOptions } from './models';
import { HttpService } from '@nestjs/axios';
import * as querystring from 'querystring';
import { NestJsQuickBooksConfigService } from '../config/services/quickbooks-config.service';
import {
  QueryUtils,
  IQuickBooksErrorResponse,
  NestJsQuickBooksHttpError,
} from '../../utils';
import { Request } from 'express';

@Injectable()
export abstract class NestJsQuickBooksBaseService<
  Response,
  Query,
  QueryResponse,
> {
  public resource: string;

  private readonly sandboxUrl = 'https://sandbox-quickbooks.api.intuit.com';
  private readonly liveUrl = 'https://quickbooks.api.intuit.com';

  constructor(
    private readonly authService: NestJsQuickBooksAuthService,
    private readonly configService: NestJsQuickBooksConfigService,
    private readonly http: HttpService,
  ) {}

  protected getRealm(): Observable<string> {
    return from(
      this.configService.global.store
        .getToken()
        .then((token) => token?.realmId),
    );
  }

  protected get apiUrl(): string {
    return this.authService.mode === 'production'
      ? this.liveUrl
      : this.sandboxUrl;
  }

  public query(condition: WhereOptions<Query>): Promise<QueryResponse> {
    return firstValueFrom(
      this.getHttpHeaders()
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
        .pipe(
          map((x) => x.data),
          catchError(this.handleHttpError),
        ),
    );
  }

  protected get<R = Response>(
    path?: string,
    queryParams?: Record<string, any>,
    headers?: Record<string, any>,
  ): Promise<R> {
    return firstValueFrom(
      this.getHttpHeaders()
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
        .pipe(
          map((x) => x.data),
          catchError(this.handleHttpError),
        ),
    );
  }

  protected post<R = Response>(
    body: any,
    path?: string,
    queryParams?: Record<string, any>,
    headers?: Record<string, any>,
  ): Promise<R> {
    return firstValueFrom(
      this.getHttpHeaders()
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
        .pipe(
          map((x) => x.data),
          catchError(this.handleHttpError),
        ),
    );
  }

  /**
   * Handle any Http Error
   * @param error
   * @returns
   */
  handleHttpError(error: any): Observable<any> {
    if (error.response) {
      throw new NestJsQuickBooksHttpError(
        error.response.data,
        error.response.status,
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('handleHttpError.request');
      console.log(JSON.stringify(error.request, null, 2));
    } else if (typeof error) {
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('handleHttpError.other');
      console.log(JSON.stringify(error.response.errors, null, 2));
    }

    return of(error);
  }

  protected queryUrl(condition: WhereOptions<any>): Observable<string> {
    return this.getRealm().pipe(
      map(
        (realm) =>
          `${
            this.apiUrl
          }/v3/company/${realm}/query?minorversion=62&${QueryUtils.generateQuery(
            this.resource,
            condition,
          )}`,
      ),
    );
  }

  protected url(
    path: string,
    queryParams: Record<string, any> = {},
  ): Observable<string> {
    queryParams['minorversion'] = 62;

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
