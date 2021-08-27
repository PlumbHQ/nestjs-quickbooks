import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksVendorsDto,
  FullUpdateQuickBooksVendorsDto,
  QuickBooksVendors,
  QuickBooksVendorsQueryModel,
  QuickBooksVendorsQueryResponseDto,
  QuickBooksVendorsResponseDto,
} from '..';

@Injectable()
export class NestJsQuickBooksVendorsService extends NestJsQuickBooksBaseService<
  QuickBooksVendorsResponseDto,
  QuickBooksVendorsQueryModel,
  QuickBooksVendorsQueryResponseDto
> {
  public resource = 'vendor';

  public create(
    dto: CreateQuickBooksVendorsDto,
  ): Promise<QuickBooksVendorsResponseDto> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksVendorsResponseDto> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksVendorsDto,
  ): Promise<QuickBooksVendorsResponseDto>;
  public fullUpdate(
    vendor: QuickBooksVendors,
    dto: FullUpdateQuickBooksVendorsDto,
  ): Promise<QuickBooksVendorsResponseDto>;
  public fullUpdate(
    ...args: [
      string | QuickBooksVendors,
      string | FullUpdateQuickBooksVendorsDto,
      FullUpdateQuickBooksVendorsDto?,
    ]
  ): Promise<QuickBooksVendorsResponseDto> {
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
