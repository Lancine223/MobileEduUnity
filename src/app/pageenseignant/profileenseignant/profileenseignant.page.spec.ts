import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileenseignantPage } from './profileenseignant.page';

describe('ProfileenseignantPage', () => {
  let component: ProfileenseignantPage;
  let fixture: ComponentFixture<ProfileenseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileenseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
