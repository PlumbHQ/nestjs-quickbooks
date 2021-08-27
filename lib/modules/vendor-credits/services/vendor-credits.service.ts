import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import { QuickBooksVendorCreditsDto } from '../dto/vendor-credits.dto';
import { QuickBooksVendorCreditsQuery } from '../models/vendor-credits-query.model';
import {
  QuickBooksVendorCreditsQueryResponseDto,
  QuickBooksVendorCreditsResponseDto,
} from '../models/vendor-credits-response.model';
import { QuickBooksVendorCredits } from '../models/vendor-credits.model';

@Injectable()
export class NestJsQuickBooksVendorCreditsService extends NestJsQuickBooksBaseService<
  QuickBooksVendorCredits,
  QuickBooksVendorCreditsQuery,
  QuickBooksVendorCreditsQueryResponseDto
> {
  public resource = 'vendorCredit';

  public create(
    dto: QuickBooksVendorCreditsDto,
  ): Promise<QuickBooksVendorCreditsResponseDto> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksVendorCreditsResponseDto> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksVendorCreditsDto,
  ): Promise<QuickBooksVendorCreditsResponseDto>;
  public fullUpdate(
    vendorCredit: QuickBooksVendorCredits,
    dto: QuickBooksVendorCreditsDto,
  ): Promise<QuickBooksVendorCreditsResponseDto>;
  public fullUpdate(
    ...args: [
      string | QuickBooksVendorCredits,
      string | QuickBooksVendorCreditsDto,
      QuickBooksVendorCreditsDto?,
    ]
  ): Promise<QuickBooksVendorCreditsResponseDto> {
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
    dto: QuickBooksVendorCreditsDto,
  ): Promise<QuickBooksVendorCreditsResponseDto>;
  public sparseUpdate(
    vendorCredit: QuickBooksVendorCredits,
    dto: QuickBooksVendorCreditsDto,
  ): Promise<QuickBooksVendorCreditsResponseDto>;
  public sparseUpdate(
    ...args: [
      string | QuickBooksVendorCredits,
      string | QuickBooksVendorCreditsDto,
      QuickBooksVendorCreditsDto?,
    ]
  ): Promise<QuickBooksVendorCreditsResponseDto> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksVendorCredits, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrCustomer, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrCustomer as string, tokenOrDto as string, dto];
    }

    const vendorCredit = idOrCustomer as QuickBooksVendorCredits;
    return [vendorCredit.Id, vendorCredit.SyncToken, tokenOrDto as DTO];
  }
}
