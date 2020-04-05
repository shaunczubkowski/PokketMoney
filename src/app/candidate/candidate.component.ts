import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FecService } from "../shared/services/fec.service";
import { Candidate } from "../shared/models/Candidate";
import { CandidateSearchResults } from "../shared/models/CandidateSearchResults";
import { CommitteeResults } from "../shared/models/CommitteeResults";
import { Committee } from "../shared/models/Committee";
import { Observable, Observer } from "rxjs";
import { MatTabChangeEvent } from "@angular/material";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.css"],
})
export class CandidateComponent implements OnInit {
  private candidateId: string;
  public candidate: Candidate;
  public listOfCommittees: Committee[];
  public isLoading = false;

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
      },
      (error) => {
        console.error(
          `An error occured while fetching candidate details: ${error}`
        );
      }
    );
  }

  tabChanged(args: MatTabChangeEvent): void {
    if (args.tab.textLabel === "Committees" && !this.listOfCommittees) {
      this.getCommitteesForCandidate();
    }
  }

  public getCommitteesForCandidate(): void {
    this.isLoading = true;
    this.fecService.getCommitteesByCandidateId(this.candidateId).subscribe(
      (results: CommitteeResults) => {
        this.isLoading = false;
        if (results.pagination.count > 0) {
          this.listOfCommittees = results.results;
        } else {
          this.listOfCommittees = [];
        }
      },
      (error) => {
        this.isLoading = false;
        console.error(
          `An error occured while fetching committee details for ${this.candidate.candidate_id}: ${error}`
        );
      }
    );
  }
}
