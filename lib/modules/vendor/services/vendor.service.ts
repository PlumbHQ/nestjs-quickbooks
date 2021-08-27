import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  CreateQuickBooksVendorDto,
  FullUpdateQuickBooksVendorDto,
  QuickBooksVendorDto,
  QuickBooksVendorQueryDto,
  QuickBooksVendorQueryResponseModel,
  QuickBooksVendorResponseModel,
} from '..';
import {
  CanRead,
  CanCreate,
  CanFullUpdate,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksVendorService
  extends NestJsQuickBooksBaseService<
    QuickBooksVendorResponseModel,
    QuickBooksVendorQueryDto,
    QuickBooksVendorQueryResponseModel
  >
  implements
    CanRead<QuickBooksVendorResponseModel>,
    CanCreate<QuickBooksVendorDto, QuickBooksVendorResponseModel>,
    CanFullUpdate<QuickBooksVendorDto, QuickBooksVendorResponseModel>
{
  public resource = 'vendor';

  public read(id: string): Promise<QuickBooksVendorResponseModel> {
    return this.get(id);
  }

  public create(
    dto: CreateQuickBooksVendorDto,
  ): Promise<QuickBooksVendorResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksVendorDto,
  ): Promise<QuickBooksVendorResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }
}
