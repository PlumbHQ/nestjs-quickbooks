import {
  QuickBooksQueryResponseData,
  QuickBooksResponseModel,
} from '../../common/models';
import { QuickBooksTaxRateEntity } from '../entities/tax-rate.entity';

export interface QuickBooksTaxRateResponseModel
  extends QuickBooksResponseModel {
  TaxRate: QuickBooksTaxRateEntity;
}

export interface QuickBooksTaxRateQueryResponseModel
  extends QuickBooksResponseModel {
  QueryResponse: QuickBooksQueryResponseData & {
    TaxRate: QuickBooksTaxRateEntity[];
  };
}
