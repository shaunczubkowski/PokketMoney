import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Candidate } from "../../models/Candidate";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() data: Candidate[];

  dataSource: MatTableDataSource<Candidate>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  columnsToDisplay: string[] = [
    "name",
    "lastFileDate",
    "partyFull",
    "officeFull",
    "state",
    "district",
    "buttons"
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public viewCandidate(id: string): void {
    this.router.navigate([`/candidate/${id}`]);
  }
}
