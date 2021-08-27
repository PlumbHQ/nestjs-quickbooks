import { QuickBooksResponseModel } from '../../common/models';
import { QuickBooksCompanyInfoEntity } from '../entities/company-info.entity';

export interface QuickBooksCompanyInfoResponseModel
  extends QuickBooksResponseModel {
  CompanyInfo: QuickBooksCompanyInfoEntity;
}

export interface QuickBooksCompanyInfoQueryResponseModel
  extends QuickBooksResponseModel {
  CompanyInfo: QuickBooksCompanyInfoEntity;
}
