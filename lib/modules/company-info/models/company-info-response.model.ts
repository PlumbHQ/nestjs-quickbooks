import { QuickBooksResponseDto } from '../../common/models';
import { QuickBooksCompanyInfo } from './company-info.model';

export interface QuickBooksCompanyInfoResponseDto
  extends QuickBooksResponseDto {
  CompanyInfo: QuickBooksCompanyInfo;
}

export interface QuickBooksCompanyInfoQueryResponseDto
  extends QuickBooksResponseDto {
  CompanyInfo: QuickBooksCompanyInfo;
}
