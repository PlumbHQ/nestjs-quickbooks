import { QuickBooksQueryDto } from '../../common/models';
import { QuickBookItemTypes } from '../entities/item.entity';

export interface QuickBooksItemQueryDto extends Partial<QuickBooksQueryDto> {
  Name?: string;
  Type?: QuickBookItemTypes;
  Sku?: string;
  Active?: boolean;
  FullyQualifiedName?: string;
}
