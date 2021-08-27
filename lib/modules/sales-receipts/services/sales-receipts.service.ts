import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import { QuickBooksSalesReceiptsDto } from '../dto/sales-receipts.dto';
import { QuickBooksSalesReceiptsQuery } from '../models/sales-receipts-query.model';
import {
  QuickBooksSalesReceiptsQueryResponseDto,
  QuickBooksSalesReceiptsResponseDto,
} from '../models/sales-receipts-response.model';
import { QuickBooksSalesReceipts } from '../models/sales-receipt.model';

@Injectable()
export class NestJsQuickBooksSalesReceiptsService extends NestJsQuickBooksBaseService<
  QuickBooksSalesReceipts,
  QuickBooksSalesReceiptsQuery,
  QuickBooksSalesReceiptsQueryResponseDto
> {
  public resource = 'salesReceipt';

  public create(
    dto: QuickBooksSalesReceiptsDto,
  ): Promise<QuickBooksSalesReceiptsResponseDto> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksSalesReceiptsResponseDto> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksSalesReceiptsDto,
  ): Promise<QuickBooksSalesReceiptsResponseDto>;
  public fullUpdate(
    salesReceipt: QuickBooksSalesReceipts,
    dto: QuickBooksSalesReceiptsDto,
  ): Promise<QuickBooksSalesReceiptsResponseDto>;
  public fullUpdate(
    ...args: [
      string | QuickBooksSalesReceipts,
      string | QuickBooksSalesReceiptsDto,
      QuickBooksSalesReceiptsDto?,
    ]
  ): Promise<QuickBooksSalesReceiptsResponseDto> {
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
  ): Promise<QuickBooksSalesReceiptsResponseDto>;
  public sparseUpdate(
    salesReceipt: QuickBooksSalesReceipts,
    dto: QuickBooksSalesReceiptsDto,
  ): Promise<QuickBooksSalesReceiptsResponseDto>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksSalesReceipts,
      string | QuickBooksSalesReceiptsDto,
      QuickBooksSalesReceiptsDto?,
    ]
  ): Promise<QuickBooksSalesReceiptsResponseDto> {
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
