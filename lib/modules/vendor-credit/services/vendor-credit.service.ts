import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import {
  QuickBooksVendorCreditDeleteResponseModel,
  QuickBooksVendorCreditQueryResponseModel,
  QuickBooksVendorCreditResponseModel,
} from '../models/vendor-credit-response.model';
import {
  QuickBooksVendorCreditEntity,
  QuickBooksVendorCreditQueryDto,
  QuickBooksVendorCreditDto,
} from '..';
import {
  CanRead,
  CanCreate,
  CanFullUpdate,
  CanDelete,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksVendorCreditService
  extends NestJsQuickBooksBaseService<
    QuickBooksVendorCreditEntity,
    QuickBooksVendorCreditQueryDto,
    QuickBooksVendorCreditQueryResponseModel
  >
  implements
    CanRead<QuickBooksVendorCreditResponseModel>,
    CanCreate<QuickBooksVendorCreditDto, QuickBooksVendorCreditResponseModel>,
    CanFullUpdate<
      QuickBooksVendorCreditDto,
      QuickBooksVendorCreditResponseModel
    >,
    CanDelete<QuickBooksVendorCreditDeleteResponseModel>
{
  public resource = 'vendorCredit';

  public read(id: string): Promise<QuickBooksVendorCreditResponseModel> {
    return this.get(id);
  }

  public create(
    dto: QuickBooksVendorCreditDto,
  ): Promise<QuickBooksVendorCreditResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksVendorCreditDto,
  ): Promise<QuickBooksVendorCreditResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksVendorCreditDeleteResponseModel> {
    return this.post(
      {
        Id: id,
        SyncToken: token,
      },
      '',
      {
        operation: 'delete',
      },
    );
  }
}
