import { Injectable } from '@nestjs/common';
import { mergeMap, Observable } from 'rxjs';
import { BaseService } from '../../common/base.service';
import {
  FullUpdateQuickBooksCompanyInfoDto,
  QuickBooksCompanyInfo,
  QuickBooksCompanyInfoQueryModel,
  QuickBooksCompanyInfoQueryResponseModel,
  QuickBooksCompanyInfoResponseModel,
  SparseUpdateQuickBooksCompanyInfoDto,
} from '..';

@Injectable()
export class QuickBooksCompanyInfoService extends BaseService<
  QuickBooksCompanyInfoResponseModel,
  QuickBooksCompanyInfoQueryModel,
  QuickBooksCompanyInfoQueryResponseModel
> {
  public resource = 'companyinfo';

  public read(): Observable<QuickBooksCompanyInfoResponseModel> {
    return this.realm().pipe(mergeMap((x) => this.get(x)));
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksCompanyInfoDto,
  ): Observable<QuickBooksCompanyInfoResponseModel>;
  public fullUpdate(
    company: QuickBooksCompanyInfo,
    dto: FullUpdateQuickBooksCompanyInfoDto,
  ): Observable<QuickBooksCompanyInfoResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksCompanyInfo,
      string | FullUpdateQuickBooksCompanyInfoDto,
      FullUpdateQuickBooksCompanyInfoDto?,
    ]
  ): Observable<QuickBooksCompanyInfoResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksCompanyInfoDto,
  ): Observable<QuickBooksCompanyInfoResponseModel>;
  public sparseUpdate(
    company: QuickBooksCompanyInfo,
    dto: SparseUpdateQuickBooksCompanyInfoDto,
  ): Observable<QuickBooksCompanyInfoResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksCompanyInfo,
      string | SparseUpdateQuickBooksCompanyInfoDto,
      SparseUpdateQuickBooksCompanyInfoDto?,
    ]
  ): Observable<QuickBooksCompanyInfoResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksCompanyInfo, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCompany, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCompany as string, tokenOrDto as string, dto];
    }

    const company = idOrCompany as QuickBooksCompanyInfo;
    return [company.Id, company.SyncToken, tokenOrDto as DTO];
  }
}
