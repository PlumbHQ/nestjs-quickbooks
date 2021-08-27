import { WhereOptions } from '..';

export interface CanQuery<QueryDto, QueryResponse> {
  query(condition: WhereOptions<QueryDto>): Promise<QueryResponse>;
}

export interface CanRead<Response> {
  read(id?: string): Promise<Response>;
}

export interface CanCreate<Dto, EntityResponse> {
  create(dto: Dto): Promise<EntityResponse>;
}

export interface CanDelete<DeleteResponse> {
  delete(id: string, token: string): Promise<DeleteResponse>;
}

export interface CanFullUpdate<Dto, EntityResponse> {
  fullUpdate(id: string, token: string, data: Dto): Promise<EntityResponse>;
}

export interface CanSparseUpdate<Dto, EntityResponse> {
  sparseUpdate(id: string, token: string, data: Dto): Promise<EntityResponse>;
}
