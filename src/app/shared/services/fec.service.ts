import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SearchQuery } from "../models/SearchQuery";
import { CommitteeResults } from "../models/CommitteeResults";
import { CandidateSearchResults } from "../models/CandidateSearchResults";
import { ScheduleAResults } from "../models/ScheduleAResults";

@Injectable({
  providedIn: "root",
})
export class FecService {
  private url: string = environment.apiUrl;
  private key: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  public getCandidateById(id: string): Observable<any> {
    let urlParams = `?api_key=${this.key}`;
    return this.http.get<any>(`${this.url}/candidate/${id}${urlParams}`);
  }

  public cadidateSearch(queryParams: SearchQuery): Observable<any> {
    let urlParams = `q=${queryParams.candidate}&api_key=${this.key}&sort=${queryParams.sort}&page=${queryParams.page}&per_page=${queryParams.per_page}&has_raised_funds=${queryParams.has_raised_funds}`;
    if (queryParams.office !== "") {
      urlParams += `&office=${queryParams.office}`;
    }

    return this.http.get<any>(`${this.url}/candidates/search/?${urlParams}`);
  }

  public getCommitteesByCandidateId(id: string): Observable<CommitteeResults> {
    return this.http.get<CommitteeResults>(
      `${this.url}/candidate/${id}/committees?api_key=${this.key}`
    );
  }

  public getCommitteeById(id: string): Observable<CommitteeResults> {
    return this.http.get<CommitteeResults>(
      `${this.url}/committee/${id}?api_key=${this.key}`
    );
  }

  public getCandidatesByCommitteeId(
    id: string
  ): Observable<CandidateSearchResults> {
    return this.http.get<CandidateSearchResults>(
      `${this.url}/committee/${id}/candidates?api_key=${this.key}`
    );
  }

  public getContribsByCommitteeAndCandidate(
    candidateId: string,
    committeeId: string
  ): Observable<ScheduleAResults> {
    return this.http.get<ScheduleAResults>(
      `${this.url}/schedules/schedule_a?candidate_id=${candidateId}&committee_id=${committeeId}&api_key=${this.key}`
    );
  }
}
