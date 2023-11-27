import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadoneCoursPage } from './readone-cours.page';

describe('ReadoneCoursPage', () => {
  let component: ReadoneCoursPage;
  let fixture: ComponentFixture<ReadoneCoursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadoneCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
