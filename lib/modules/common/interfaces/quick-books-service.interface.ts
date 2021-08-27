import { WhereOptions } from '..';

export interface IQuereableQuickBooksService<QueryDto, QueryResponse> {
  query(condition: WhereOptions<QueryDto>): Promise<QueryResponse>;
}

export interface IReadableQuickBooksService<Response> {
  /**
   * ReadById Method
   * @param {string} id
   * @returns {Response}
   */
  readById(id: string): Promise<Response>;
}

export interface ICreatableQuickBooksService<Dto, CreateResponse> {
  /**
   * Create Method
   * @param dto
   */
  create(dto: Dto): Promise<CreateResponse>;
}

export interface IDeletableQuickBooksService<DeleteResponse> {
  /**
   * Delete Method
   * @param {string} id
   * @param {string} token
   */
  delete(id: string, token: string): Promise<DeleteResponse>;
}

export interface IUpdateableQuickBooksService< {
  /**
   * Full Update Method
   * @param {string} id
   * @param {string} syncToken
   * @param dto
   */
  fullUpdate(
    id: string,
    syncToken: string,
    dto: FullUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel>;

  /**
   * Sparse Update Method
   * @param {string} id
   * @param {string} syncToken
   * @param dto
   */
  sparseUpdate?(
    id: string,
    token: string,
    dto: SparseUpdateQuickBooksCustomerDto,
  ): Promise<QuickBooksCustomerResponseModel>;
}
