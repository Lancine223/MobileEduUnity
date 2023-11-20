import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrammeenseignantPage } from './programmeenseignant.page';

describe('ProgrammeenseignantPage', () => {
  let component: ProgrammeenseignantPage;
  let fixture: ComponentFixture<ProgrammeenseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProgrammeenseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
