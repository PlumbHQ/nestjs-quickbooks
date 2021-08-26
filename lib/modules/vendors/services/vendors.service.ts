import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseService } from '../../common/base.service';
import {
  CreateQuickBooksVendorsDto,
  FullUpdateQuickBooksVendorsDto,
  QuickBooksVendors,
  QuickBooksVendorsQueryModel,
  QuickBooksVendorsQueryResponseModel,
  QuickBooksVendorsResponseModel,
} from '..';

@Injectable()
export class NestJsQuickBooksVendorsService extends BaseService<
  QuickBooksVendorsResponseModel,
  QuickBooksVendorsQueryModel,
  QuickBooksVendorsQueryResponseModel
> {
  public resource = 'vendor';

  public create(
    dto: CreateQuickBooksVendorsDto,
  ): Observable<QuickBooksVendorsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Observable<QuickBooksVendorsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksVendorsDto,
  ): Observable<QuickBooksVendorsResponseModel>;
  public fullUpdate(
    vendor: QuickBooksVendors,
    dto: FullUpdateQuickBooksVendorsDto,
  ): Observable<QuickBooksVendorsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksVendors,
      string | FullUpdateQuickBooksVendorsDto,
      FullUpdateQuickBooksVendorsDto?,
    ]
  ): Observable<QuickBooksVendorsResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksVendors, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrVendor, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrVendor as string, tokenOrDto as string, dto];
    }

    const vendor = idOrVendor as QuickBooksVendors;
    return [vendor.Id, vendor.SyncToken, tokenOrDto as DTO];
  }
}
