import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Committee } from "../../models/Committee";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-committee-table",
  templateUrl: "./committee-table.component.html",
  styleUrls: ["./table.component.css"],
})
export class CommitteeTableComponent implements OnInit {
  @Input() data: Committee[];

  dataSource: MatTableDataSource<Committee>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columnsToDisplay: string[] = [
    "designationFull",
    "committeeTypeFullName",
    "name",
    "state",
    "filingFrequency",
    "lastFileDate",
    "buttons",
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  public viewCommittee(committee: Committee): void {
    this.router.navigate([`/committee/${committee.committee_id}`]);
  }
}
