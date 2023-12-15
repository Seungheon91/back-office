export interface PaginationResponse<T extends any> {
  content: T;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageable;
  size: number;
  sort: ISort;
  totalElements: number;
  totalPages: number;
}
