import { QuickBooksResponseModel } from '../../common/models';
import { QuickBooksCompanyInfoDto } from '../dto/company-info.dto';

export interface QuickBooksCompanyInfoResponseModel
  extends QuickBooksResponseModel {
  CompanyInfo: QuickBooksCompanyInfoDto;
}

export interface QuickBooksCompanyInfoQueryResponseModel
  extends QuickBooksResponseModel {
  CompanyInfo: QuickBooksCompanyInfoDto;
}
