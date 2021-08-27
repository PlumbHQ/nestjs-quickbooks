import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from 'lib/modules/common/base.service';
import { QuickBooksPurchaseDto } from '../dto/purchase.dto';
import { QuickBooksPurchaseQueryDto } from '../dto/purchase-query.dto';
import {
  QuickBooksPurchaseDeleteResponseModel,
  QuickBooksPurchaseQueryResponseModel,
  QuickBooksPurchaseResponseModel,
} from '../models/purchase-response.model';
import { QuickBooksPurchaseEntity } from '../entities/purchase.entity';
import {
  CanCreate,
  CanDelete,
  CanFullUpdate,
  CanRead,
} from 'lib/modules/common/interfaces/quick-books-service.interface';

@Injectable()
export class NestJsQuickBooksPurchaseService
  extends NestJsQuickBooksBaseService<
    QuickBooksPurchaseEntity,
    QuickBooksPurchaseQueryDto,
    QuickBooksPurchaseQueryResponseModel
  >
  implements
    CanRead<QuickBooksPurchaseResponseModel>,
    CanCreate<QuickBooksPurchaseDto, QuickBooksPurchaseResponseModel>,
    CanFullUpdate<QuickBooksPurchaseDto, QuickBooksPurchaseResponseModel>,
    CanDelete<QuickBooksPurchaseDeleteResponseModel>
{
  public resource = 'purchase';

  public create(
    dto: QuickBooksPurchaseDto,
  ): Promise<QuickBooksPurchaseResponseModel> {
    return this.post(dto);
  }

  public read(id: string): Promise<QuickBooksPurchaseResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: QuickBooksPurchaseDto,
  ): Promise<QuickBooksPurchaseResponseModel> {
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksPurchaseDeleteResponseModel> {
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
