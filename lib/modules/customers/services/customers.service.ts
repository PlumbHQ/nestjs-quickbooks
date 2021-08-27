import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksCustomerDto,
  FullUpdateQuickBooksCustomerDto,
  QuickBooksCustomerEntity,
  QuickBooksCustomerQueryDto,
  QuickBooksCustomerQueryResponseDto,
  QuickBooksCustomerResponseDto,
  SparseUpdateQuickBooksCustomerDto,
} from '..';
import {
  ICreatableQuickBooksService,
  IQuereableQuickBooksService,
  IReadableQuickBooksService,
  IUpdateableQuickBooksService,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksCustomerService
  extends NestJsQuickBooksBaseService<
    QuickBooksCustomerEntity,
    QuickBooksCustomerQueryDto,
    QuickBooksCustomerQueryResponseDto
  >
  implements
    IQuereableQuickBooksService<
      QuickBooksCustomerQueryDto,
      QuickBooksCustomerQueryResponseDto
    >,
    IReadableQuickBooksService<QuickBooksCustomerResponseDto>,
    ICreatableQuickBooksService<
      CreateQuickBooksCustomerDto,
      QuickBooksCustomerResponseDto
    >,
    IUpdateableQuickBooksService
{
  public resource = 'customer';

  public readById(id: string): Promise<QuickBooksCustomerResponseDto> {
    return this.get(id);
  }

  public create(
    dto: CreateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseDto> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseDto> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseDto> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }
}
