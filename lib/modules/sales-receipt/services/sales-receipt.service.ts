import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import { QuickBooksSalesReceiptQueryDto } from '../dto/sales-receipt-query.dto';
import { QuickBooksSalesReceiptQueryResponseModel } from '../models/sales-receipt-response.model';
import { QuickBooksSalesReceiptEntity } from '../entities/sales-receipt.entity';
import {
  QuickBooksSalesReceiptResponseModel,
  QuickBooksSalesReceiptDto,
  QuickBooksSalesReceiptDeleteResponseModel,
} from 'lib';
import {
  CanRead,
  CanCreate,
  CanFullUpdate,
  CanDelete,
  CanSparseUpdate,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

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
