import { Injectable } from '@nestjs/common';
import {
  QuickBooksSalesReceiptResponseModel,
  QuickBooksSalesReceiptDto,
  QuickBooksSalesReceiptDeleteResponseModel,
  QuickBooksSalesReceiptEntity,
  QuickBooksSalesReceiptQueryResponseModel,
  QuickBooksSalesReceiptQueryDto,
} from '..';
import {
  NestJsQuickBooksBaseService,
  CanRead,
  CanCreate,
  CanFullUpdate,
  CanDelete,
  CanSparseUpdate,
} from '../../common';

@Injectable()
export class NestJsQuickBooksSalesReceiptService
  extends NestJsQuickBooksBaseService<
    QuickBooksSalesReceiptEntity,
    QuickBooksSalesReceiptQueryDto,
    QuickBooksSalesReceiptQueryResponseModel
  >
  implements
    CanRead<QuickBooksSalesReceiptResponseModel>,
    CanCreate<QuickBooksSalesReceiptDto, QuickBooksSalesReceiptResponseModel>,
    CanFullUpdate<
      QuickBooksSalesReceiptDto,
      QuickBooksSalesReceiptResponseModel
    >,
    CanSparseUpdate<
      QuickBooksSalesReceiptDto,
      QuickBooksSalesReceiptResponseModel
    >,
    CanDelete<QuickBooksSalesReceiptDeleteResponseModel>
{
  public resource = 'salesReceipt';

  public read(id: string): Promise<QuickBooksSalesReceiptResponseModel> {
    return this.get(id);
  }

  public create(
    dto: QuickBooksSalesReceiptDto,
  ): Promise<QuickBooksSalesReceiptResponseModel> {
    return this.post(dto);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksSalesReceiptDto,
  ): Promise<QuickBooksSalesReceiptResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public sparseUpdate(
    id: string,
    token: string,
    dto: QuickBooksSalesReceiptDto,
  ): Promise<QuickBooksSalesReceiptResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
      sparse: true,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksSalesReceiptDeleteResponseModel> {
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
