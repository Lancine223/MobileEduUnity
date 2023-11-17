import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LesprogrammesPage } from './lesprogrammes.page';

describe('LesprogrammesPage', () => {
  let component: LesprogrammesPage;
  let fixture: ComponentFixture<LesprogrammesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LesprogrammesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
