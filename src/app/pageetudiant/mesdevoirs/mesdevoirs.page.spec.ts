import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesdevoirsPage } from './mesdevoirs.page';

describe('MesdevoirsPage', () => {
  let component: MesdevoirsPage;
  let fixture: ComponentFixture<MesdevoirsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesdevoirsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
