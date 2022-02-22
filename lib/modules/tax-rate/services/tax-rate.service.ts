import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import { CanRead } from '../../common/interfaces/quick-books-service.interface';
import { QuickBooksTaxRateQueryDto } from '../dto/tax-rate-query.dto';
import {
  QuickBooksTaxRateQueryResponseModel,
  QuickBooksTaxRateResponseModel,
} from '../models/tax-rate-response.model';

@Injectable()
export class NestJsQuickBooksTaxRateService
  extends NestJsQuickBooksBaseService<
    QuickBooksTaxRateResponseModel,
    QuickBooksTaxRateQueryDto,
    QuickBooksTaxRateQueryResponseModel
  >
  implements CanRead<QuickBooksTaxRateResponseModel>
{
  public resource = 'taxrate';

  public read(id: string): Promise<QuickBooksTaxRateResponseModel> {
    return this.get(id);
  }
}
