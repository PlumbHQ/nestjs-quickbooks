import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksCustomerDto,
  UpdateQuickBooksCustomerDto,
  QuickBooksCustomerEntity,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryResponseDto,
  QuickBooksCustomerResponseDto,
} from '..';

@Injectable()
export class NestJsQuickBooksCustomerService extends NestJsQuickBooksBaseService<
  QuickBooksCustomerEntity,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryResponseDto
> {
  public resource = 'customer';

  public readById(id: string): Promise<QuickBooksCustomerResponseDto> {
    return this.get(id);
  }

  public create(
    dto: CreateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseDto> {
    return this.post(dto);
  }

  public update(
    id: string,
    token: string,
    dto: UpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseDto> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }
}
