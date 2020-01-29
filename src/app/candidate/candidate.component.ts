import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FecService } from "../shared/services/fec.service";
import { Candidate } from "../shared/models/Candidate";
import { CandidateSearchResults } from "../shared/models/CandidateSearchResults";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.css"]
})
export class CandidateComponent implements OnInit {
  private candidateId: string;
  public candidate: Candidate;

  constructor(
    private activatedRouter: ActivatedRoute,
    private fecService: FecService
  ) {}

  ngOnInit() {
    this.candidateId = this.activatedRouter.snapshot.paramMap.get("id");

    this.getCandidateDetails(this.candidateId);
  }

  private getCandidateDetails(id: string): void {
    this.fecService.getCandidateById(id).subscribe(
      (response: CandidateSearchResults) => {
        this.candidate = response.results[0];
        console.log(this.candidate);
      },
      error => {
        console.error(
          `An error occured while fetching candidate details: ${error}`
        );
      }
    );
  }
}
