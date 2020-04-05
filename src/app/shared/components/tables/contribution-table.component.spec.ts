import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionTableComponent } from './contribution-table.component';

describe('ContributionTableComponent', () => {
  let component: ContributionTableComponent;
  let fixture: ComponentFixture<ContributionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
