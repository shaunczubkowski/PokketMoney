export class Pagination {
  count: number;
  page: number;
  pages: number;
  per_page: number;
  last_indexes?: {
    last_index: string;
    last_contribution_receipt_date: string;
  };
}
