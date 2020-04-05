import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FecService } from "../shared/services/fec.service";
import { Committee } from "../shared/models/Committee";
import { MatTabChangeEvent } from "@angular/material";
import { Candidate } from "../shared/models/Candidate";
import { CandidateSearchResults } from "../shared/models/CandidateSearchResults";
import { ScheduleAResults } from "../shared/models/ScheduleAResults";
import { ScheduleA } from "../shared/models/ScheduleA";

@Component({
  selector: "app-committee",
  templateUrl: "./committee.component.html",
  styleUrls: ["./committee.component.css"],
})
export class CommitteeComponent implements OnInit {
  private committeeId: string;
  public committee: Committee;
  public isLoading: boolean;
  public message: string;
  public listOfCandidates: Candidate[];
  public listOfContributors: ScheduleA[];

  constructor(
    private activedRoute: ActivatedRoute,
    private fecService: FecService
  ) {}

  ngOnInit() {
    this.committeeId = this.activedRoute.snapshot.paramMap.get("id");

    this.getCommitteeById(this.committeeId);
  }

  private getCommitteeById(id: string) {
    this.isLoading = true;
    this.fecService.getCommitteeById(id).subscribe(
      (result) => {
        this.isLoading = false;

        if (result.results.length === 0) {
          this.message = `No committees found with ID: ${id}`;
          console.warn(`No committees match ID: ${id}`);
        } else {
          this.committee = result.results[0];
        }
      },
      (error) => {
        this.isLoading = false;
        console.error(
          `An error occured fetching committee details for ID: ${id}`
        );
      }
    );
  }

  tabChanged(args: MatTabChangeEvent): void {
    if (args.tab.textLabel === "Candidates" && !this.listOfCandidates) {
      this.getCommitteesForCandidate();
    } else if (
      args.tab.textLabel === "Contributions" &&
      !this.listOfContributors
    ) {
      this.getContributions();
    }
  }

  public getCommitteesForCandidate(): void {
    this.isLoading = true;
    this.fecService.getCandidatesByCommitteeId(this.committeeId).subscribe(
      (results: CandidateSearchResults) => {
        this.isLoading = false;
        if (results.pagination.count > 0) {
          this.listOfCandidates = results.results;
        } else {
          this.listOfCandidates = [];
        }
      },
      (error) => {
        this.isLoading = false;
        console.error(
          `An error occured while fetching candidates for ${this.committeeId}: ${error}`
        );
      }
    );
  }

  public getContributions(): void {
    this.isLoading = true;
    this.fecService
      .getContribsByCommitteeAndCandidate(
        this.committee.candidate_ids[0],
        this.committeeId
      )
      .subscribe(
        (results: ScheduleAResults) => {
          this.isLoading = false;
          if (results.pagination.count > 0) {
            this.listOfContributors = results.results;
          } else {
            this.listOfContributors = [];
          }
        },
        (error) => {
          this.isLoading = false;
          console.error(
            `An error occured while fetching contributions: ${error}`
          );
        }
      );
  }
}
