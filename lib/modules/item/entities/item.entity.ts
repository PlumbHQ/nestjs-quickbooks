import { QuickBooksBaseEntity, QuickBooksRefModel } from '../../common';

export enum QuickBookItemTypes {
  Inventory = 'Inventory',
  Service = 'Service',
  NonInventory = 'NonInventory',
}

export interface QuickBooksItemEntity extends QuickBooksBaseEntity {
  ItemCategoryType: 'Product' | 'Service';
  Name: string;
  InvStartDate: string;
  Type: QuickBookItemTypes;
  QtyOnHand: number;
  AssetAccountRef: QuickBooksRefModel;
  Sku: string;
  SalesTaxIncluded: boolean;
  TrackQtyOnHand: boolean;
  SalesTaxCodeRef: QuickBooksRefModel;
  ClassRef: QuickBooksRefModel;
  PurchaseTaxIncluded: boolean;
  Description: string;
  AbatementRate: number;
  ReverseChargeRate: number;
  SubItem: boolean;
  Taxable: boolean;
  UQCDisplayText: string;
  ReorderPoint: number;
  PurchaseDesc: string;
  PrefVendorRef: QuickBooksRefModel;
  Active: boolean;
  UQCId: string;
  PurchaseTaxCodeRef: QuickBooksRefModel;
  ServiceType: string;
  PurchaseCost: number;
  ParentRef: QuickBooksRefModel;
  UnitPrice: number;
  FullyQualifiedName: string;
  Level: number;
  IncomeAccountRef: QuickBooksRefModel;
  ExpenseAccountRef: QuickBooksRefModel;
  TaxClassificationRef: QuickBooksRefModel;
}
