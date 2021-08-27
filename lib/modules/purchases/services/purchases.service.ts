import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import { QuickBooksPurchasesDto } from '../dto/purchases.dto';
import { QuickBooksPurchasesQuery } from '../models/purchases-query.model';
import {
  QuickBooksPurchasesQueryResponseDto,
  QuickBooksPurchasesResponseDto,
} from '../models/purchases-response.model';
import { QuickBooksPurchases } from '../models/purchases.model';

@Injectable()
export class NestJsQuickBooksPurchasesService extends NestJsQuickBooksBaseService<
  QuickBooksPurchases,
  QuickBooksPurchasesQuery,
  QuickBooksPurchasesQueryResponseDto
> {
  public resource = 'purchase';

  public create(
    dto: QuickBooksPurchasesDto,
  ): Promise<QuickBooksPurchasesResponseDto> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksPurchasesResponseDto> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchasesDto,
  ): Promise<QuickBooksPurchasesResponseDto>;
  public fullUpdate(
    purchase: QuickBooksPurchases,
    dto: QuickBooksPurchasesDto,
  ): Promise<QuickBooksPurchasesResponseDto>;
  public fullUpdate(
    ...args: [
      string | QuickBooksPurchases,
      string | QuickBooksPurchasesDto,
      QuickBooksPurchasesDto?,
    ]
  ): Promise<QuickBooksPurchasesResponseDto> {
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
  ): Promise<QuickBooksPurchasesResponseDto>;
  public sparseUpdate(
    purchase: QuickBooksPurchases,
    dto: QuickBooksPurchasesDto,
  ): Promise<QuickBooksPurchasesResponseDto>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksPurchases,
      string | QuickBooksPurchasesDto,
      QuickBooksPurchasesDto?,
    ]
  ): Promise<QuickBooksPurchasesResponseDto> {
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
