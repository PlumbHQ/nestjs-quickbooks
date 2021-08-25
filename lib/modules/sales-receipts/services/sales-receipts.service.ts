import { Injectable } from '@nestjs/common';
import { BaseService } from 'lib/modules/common/base.service';
import { Observable } from 'rxjs';
import { QuickBooksSalesReceiptsDto } from '../dto/sales-receipts.dto';
import { QuickBooksSalesReceiptsQuery } from '../models/sales-receipts-query.model';
import {
  QuickBooksSalesReceiptsQueryResponseModel,
  QuickBooksSalesReceiptsResponseModel,
} from '../models/sales-receipts-response.model';
import { QuickBooksSalesReceipts } from '../models/sales-receipt.model';

@Injectable()
export class SalesReceiptsService extends BaseService<
  QuickBooksSalesReceipts,
  QuickBooksSalesReceiptsQuery,
  QuickBooksSalesReceiptsQueryResponseModel
> {
  public resource = 'salesReceipt';

  public create(
    dto: QuickBooksSalesReceiptsDto,
  ): Observable<QuickBooksSalesReceiptsResponseModel> {
    return this.post(dto);
  }

  public readById(
    id: string,
  ): Observable<QuickBooksSalesReceiptsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksSalesReceiptsDto,
  ): Observable<QuickBooksSalesReceiptsResponseModel>;
  public fullUpdate(
    salesReceipt: QuickBooksSalesReceipts,
    dto: QuickBooksSalesReceiptsDto,
  ): Observable<QuickBooksSalesReceiptsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksSalesReceipts,
      string | QuickBooksSalesReceiptsDto,
      QuickBooksSalesReceiptsDto?,
    ]
  ): Observable<QuickBooksSalesReceiptsResponseModel> {
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
    dto: QuickBooksSalesReceiptsDto,
  ): Observable<QuickBooksSalesReceiptsResponseModel>;
  public sparseUpdate(
    salesReceipt: QuickBooksSalesReceipts,
    dto: QuickBooksSalesReceiptsDto,
  ): Observable<QuickBooksSalesReceiptsResponseModel>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksSalesReceipts,
      string | QuickBooksSalesReceiptsDto,
      QuickBooksSalesReceiptsDto?,
    ]
  ): Observable<QuickBooksSalesReceiptsResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksSalesReceipts, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCustomer, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCustomer as string, tokenOrDto as string, dto];
    }

    const salesReceipt = idOrCustomer as QuickBooksSalesReceipts;
    return [salesReceipt.Id, salesReceipt.SyncToken, tokenOrDto as DTO];
  }
}
