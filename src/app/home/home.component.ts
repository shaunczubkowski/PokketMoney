import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SearchQuery } from "../shared/models/SearchQuery";
import { FecService } from "../shared/services/fec.service";
import { Candidate } from "../shared/models/Candidate";
import { CandidateSearchResults } from "../shared/models/CandidateSearchResults";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public listOfCandidates: Candidate[];
  private searchTerm: string;
  public message: string;
  public isLoadingResults = false;

  constructor(private fecService: FecService) {}

  ngOnInit() {}

  private search(searchString: string): void {
    let query: SearchQuery = new SearchQuery();
    this.listOfCandidates = undefined;
    this.searchTerm = searchString;
    query.candidate = encodeURI(this.searchTerm);

    this.getCandidates(query);
  }

  private getCandidates(query: SearchQuery): void {
    this.isLoadingResults = true;
    this.fecService.cadidateSearch(query).subscribe(
      (results: CandidateSearchResults) => {
        this.isLoadingResults = false;
        if (results.pagination.count > 0) {
          this.message = undefined;
          this.listOfCandidates = results.results;
        } else {
          this.listOfCandidates = [];
          this.message = `No results found for '${this.searchTerm}'`;
        }
      },
      error => {
        this.isLoadingResults = false;
        console.error(
          "An error occurred retreiving candidate results " + error
        );
      }
    );
  }

  private reset(): void {
    this.listOfCandidates = undefined;
  }
}
