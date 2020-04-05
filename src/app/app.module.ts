import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { MaterialModule } from "./material.module";
import { SearchComponent } from "./shared/components/search/search.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CandidateTableComponent } from "./shared/components/tables/candidate-table.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { BooleanToYesNoPipe } from "./shared/pipes/boolean-to-yes-no.pipe";
import { CommitteeTableComponent } from "./shared/components/tables/committee-table.component";
import { FilingFrequencyPipe } from "./shared/pipes/filing-frequency.pipe";
import { CommitteeComponent } from "./committee/committee.component";
import { ContributionTableComponent } from "./shared/components/tables/contribution-table.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CandidateTableComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    CandidateComponent,
    PageNotFoundComponent,
    BooleanToYesNoPipe,
    CommitteeTableComponent,
    FilingFrequencyPipe,
    CommitteeComponent,
    ContributionTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
