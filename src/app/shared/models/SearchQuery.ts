export class SearchQuery {
  candidate: string;
  office: string;
  sort: string;
  page: number;
  per_page: number;
  has_raised_funds: boolean;

  constructor() {
    this.candidate = "";
    this.office = "";
    this.sort = "name";
    this.page = 1;
    this.per_page = 25;
    this.has_raised_funds = true;
  }
}
