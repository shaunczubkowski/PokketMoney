import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Output() onSearchTermChange: EventEmitter<any> = new EventEmitter<any>();

  searchField = new FormControl("");
  public errorMessage: string;

  constructor() {}

  ngOnInit() {}

  private search(): void {
    if (this.searchField.value) {
      this.errorMessage = undefined;
      let searchString = this.searchField.value.trim();
      this.onSearchTermChange.emit(searchString);
    } else {
      this.errorMessage = "Search term required.";
    }
  }

  private clear(): void {
    this.searchField.reset();
  }
}
