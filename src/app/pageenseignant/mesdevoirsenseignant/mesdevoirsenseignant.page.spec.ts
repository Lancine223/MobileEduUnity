import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesdevoirsenseignantPage } from './mesdevoirsenseignant.page';

describe('MesdevoirsenseignantPage', () => {
  let component: MesdevoirsenseignantPage;
  let fixture: ComponentFixture<MesdevoirsenseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesdevoirsenseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
