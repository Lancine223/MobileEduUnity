import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesforumPage } from './mesforum.page';

describe('MesforumPage', () => {
  let component: MesforumPage;
  let fixture: ComponentFixture<MesforumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesforumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
