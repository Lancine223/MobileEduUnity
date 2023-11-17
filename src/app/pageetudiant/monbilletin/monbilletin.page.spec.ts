import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonbilletinPage } from './monbilletin.page';

describe('MonbilletinPage', () => {
  let component: MonbilletinPage;
  let fixture: ComponentFixture<MonbilletinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonbilletinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
