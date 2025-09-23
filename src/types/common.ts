export interface IPaginatedResponse<T> {
  data: T;
  page?: number;
  total_pages?: number;
  total_results?: number;
}
