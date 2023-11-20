import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeselevePage } from './meseleve.page';

describe('MeselevePage', () => {
  let component: MeselevePage;
  let fixture: ComponentFixture<MeselevePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeselevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
