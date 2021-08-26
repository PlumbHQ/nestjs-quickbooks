import { Injectable } from '@nestjs/common';
import { NestJsQuickBooksBaseService } from '../../common/base.service';
import {
  QuickBooksBillsDeleteResponseModel,
  QuickBooksBillsQueryResponseModel,
  QuickBooksBillsResponseModel,
} from '../models/bills-response.model';
import { QuickBooksBillsQueryModel } from '../models/bills-query.model';
import { QuickBooksBills } from '../models/bills.model';
import {
  CreateQuickBooksBillsDto,
  FullUpdateQuickBooksBillsDto,
} from '../dto/bills.dto';

@Injectable()
export class NestJsQuickBooksBillsService extends NestJsQuickBooksBaseService<
  QuickBooksBillsResponseModel,
  QuickBooksBillsQueryModel,
  QuickBooksBillsQueryResponseModel
> {
  public resource = 'bill';

  public create(
    dto: CreateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseModel> {
    return this.post(dto);
  }

  public readById(id: string): Promise<QuickBooksBillsResponseModel> {
    return this.get(id);
  }

  public fullUpdate(
    id: string,
    token: string,
    dto: FullUpdateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseModel>;
  public fullUpdate(
    bill: QuickBooksBills,
    dto: FullUpdateQuickBooksBillsDto,
  ): Promise<QuickBooksBillsResponseModel>;
  public fullUpdate(
    ...args: [
      string | QuickBooksBills,
      string | FullUpdateQuickBooksBillsDto,
      FullUpdateQuickBooksBillsDto?,
    ]
  ): Promise<QuickBooksBillsResponseModel> {
    const [id, token, dto] = this.getUpdateArguments(args);
    return this.post({
      ...dto,
      Id: id,
      SyncToken: token,
    });
  }

  public delete(
    id: string,
    token: string,
  ): Promise<QuickBooksBillsDeleteResponseModel>;
  public delete(
    bill: QuickBooksBills,
  ): Promise<QuickBooksBillsDeleteResponseModel>;
  public delete(
    ...args: [string | QuickBooksBills, string?]
  ): Promise<QuickBooksBillsDeleteResponseModel> {
    const [id, token] = this.getOperationArguments(args);
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

  private getUpdateArguments<DTO>(
    args: [string | QuickBooksBills, string | DTO, DTO?],
  ): [string, string, DTO] {
    const [idOrBill, tokenOrDto, dto] = args;
    if (dto) {
      return [idOrBill as string, tokenOrDto as string, dto];
    }

    const bill = idOrBill as QuickBooksBills;
    return [bill.Id, bill.SyncToken, tokenOrDto as DTO];
  }

  private getOperationArguments(
    args: [string | QuickBooksBills, string?],
  ): [string, string] {
    const [idOrBill, token] = args;
    if (token) {
      return [idOrBill as string, token];
    }

    const bill = idOrBill as QuickBooksBills;
    return [bill.Id, bill.SyncToken];
  }
}
