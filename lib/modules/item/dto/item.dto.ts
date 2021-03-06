import { QuickBookItemTypes } from '../entities/item.entity';
import { QuickBooksRefDto } from '../../common/dto/ref.dto';

export interface QuickBooksInventoryItemDto {
  Type: QuickBookItemTypes.Inventory;
  IncomeAccountRef: QuickBooksRefDto;
  AssetAccountRef: QuickBooksRefDto;
  InvStartDate: string;
  ExpenseAccountRef: QuickBooksRefDto;
  QtyOnHand: number;
}

export interface QuickBooksNonInventoryItemDto {
  Type: QuickBookItemTypes.NonInventory;
  IncomeAccountRef: QuickBooksRefDto;
  ExpenseAccountRef: QuickBooksRefDto;
}

export interface QuickBooksServiceItemDto {
  Type: QuickBookItemTypes.Service;
  IncomeAccountRef: QuickBooksRefDto;
  ExpenseAccountRef: QuickBooksRefDto;
}

export interface QuickBooksItemDto {
  Name: string;
  Sku?: string;
  SalesTaxIncluded?: boolean;
  TrackQtyOnHand?: boolean;
  SalesTaxCodeRef?: QuickBooksRefDto;
  ClassRef?: QuickBooksRefDto;
  PurchaseTaxIncluded?: boolean;
  Description?: string;
  AbatementRate?: number;
  ReverseChargeRate?: number;
  SubItem?: boolean;
  Taxable?: boolean;
  UQCDisplayText?: string;
  ReorderPoint?: number;
  PurchaseDesc?: string;
  PrefVendorRef?: QuickBooksRefDto;
  Active?: boolean;
  UQCId?: string;
  PurchaseTaxCodeRef?: QuickBooksRefDto;
  ServiceType?: string;
  PurchaseCost?: number;
  ParentRef?: QuickBooksRefDto;
  UnitPrice?: number;
  TaxClassificationRef?: QuickBooksRefDto;
}

export type CreateQuickBooksItemDto = (
  | QuickBooksInventoryItemDto
  | QuickBooksNonInventoryItemDto
  | QuickBooksServiceItemDto
) &
  QuickBooksItemDto;

export type FullUpdateQuickBooksItemDto = (
  | QuickBooksInventoryItemDto
  | QuickBooksNonInventoryItemDto
  | QuickBooksServiceItemDto
) &
  QuickBooksItemDto;

export type SparseUpdateQuickBooksItemDto =
  | (
      | QuickBooksInventoryItemDto
      | QuickBooksNonInventoryItemDto
      | QuickBooksServiceItemDto
    )
  | QuickBooksItemDto;
