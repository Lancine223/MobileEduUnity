import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbonnementpagePage } from './abonnementpage.page';

describe('AbonnementpagePage', () => {
  let component: AbonnementpagePage;
  let fixture: ComponentFixture<AbonnementpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbonnementpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
