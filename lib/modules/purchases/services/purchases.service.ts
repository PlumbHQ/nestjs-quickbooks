import { Injectable } from '@nestjs/common';
import { BaseService } from 'lib/modules/common/base.service';
import { Observable } from 'rxjs';
import { QuickBooksPurchasesDto } from '../dto/purchases.dto';
import { QuickBooksPurchasesQuery } from '../models/purchases-query.model';
import {
  QuickBooksPurchasesQueryResponseModel,
  QuickBooksPurchasesResponseModel,
} from '../models/purchases-response.model';
import { QuickBooksPurchases } from '../models/purchases.model';

@Injectable()
export class NestJsQuickBooksPurchasesService extends BaseService<
  QuickBooksPurchases,
  QuickBooksPurchasesQuery,
  QuickBooksPurchasesQueryResponseModel
> {
  public resource = 'purchase';

  public create(
    dto: QuickBooksPurchasesDto,
  ): Observable<QuickBooksPurchasesResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Observable<QuickBooksPurchasesResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchasesDto,
  ): Observable<QuickBooksPurchasesResponseModel>;
  public fullUpdate(
    purchase: QuickBooksPurchases,
    dto: QuickBooksPurchasesDto,
  ): Observable<QuickBooksPurchasesResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksPurchases,
      string | QuickBooksPurchasesDto,
      QuickBooksPurchasesDto?,
    ]
  ): Observable<QuickBooksPurchasesResponseModel> {
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
    dto: QuickBooksPurchasesDto,
  ): Observable<QuickBooksPurchasesResponseModel>;
  public sparseUpdate(
    purchase: QuickBooksPurchases,
    dto: QuickBooksPurchasesDto,
  ): Observable<QuickBooksPurchasesResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksPurchases,
      string | QuickBooksPurchasesDto,
      QuickBooksPurchasesDto?,
    ]
  ): Observable<QuickBooksPurchasesResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksPurchases, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCustomer, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCustomer as string, tokenOrDto as string, dto];
    }

    const purchase = idOrCustomer as QuickBooksPurchases;
    return [purchase.Id, purchase.SyncToken, tokenOrDto as DTO];
  }
}
