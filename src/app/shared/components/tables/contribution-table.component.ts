import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Committee } from "../../models/Committee";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";
import { ScheduleA } from "../../models/ScheduleA";

@Component({
  selector: "app-contribution-table",
  templateUrl: "./contribution-table.component.html",
  styleUrls: ["./contribution-table.component.css"],
})
export class ContributionTableComponent implements OnInit {
  @Input() data: ScheduleA[];

  dataSource: MatTableDataSource<ScheduleA>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columnsToDisplay: string[] = [
    "lastName",
    "firstName",
    "middleInitial",
    "address",
    "city",
    "state",
    "zipcode",
    "occupation",
    "employer",
    "contributionReceiptAmount",
    "contributionReceiptDate",
    "individual",
    "buttons",
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  public viewPDF(url: string): void {
    console.log(url);
  }
}
