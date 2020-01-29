import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SearchQuery } from "../models/SearchQuery";

@Injectable({
  providedIn: "root"
})
export class FecService {
  private url: string = environment.apiUrl;
  private key: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  public getCandidateById(id: string): Observable<any> {
    let urlParams = `?api_key=${this.key}`;
    return this.http.get(`${this.url}/candidate/${id}${urlParams}`);
  }

  public cadidateSearch(queryParams: SearchQuery): Observable<any> {
    let urlParams = `q=${queryParams.candidate}&api_key=${this.key}&sort=${queryParams.sort}&page=${queryParams.page}&per_page=${queryParams.per_page}&has_raised_funds=${queryParams.has_raised_funds}`;
    if (queryParams.office !== "") {
      urlParams += `&office=${queryParams.office}`;
    }

    return this.http.get(`${this.url}/candidates/search/?${urlParams}`);
  }
}
