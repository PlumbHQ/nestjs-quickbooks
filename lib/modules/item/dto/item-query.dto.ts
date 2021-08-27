import { QuickBooksQueryDto } from '../../common/models';
import { QuickBookItemTypes } from '../entities/item.entity';

export interface QuickBooksItemQueryDto extends QuickBooksQueryDto {
  Name: string;
  Type: QuickBookItemTypes;
  Sku: string;
  Active: boolean;
  FullyQualifiedName: string;
}
