import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MescoursPage } from './mescours.page';

describe('MescoursPage', () => {
  let component: MescoursPage;
  let fixture: ComponentFixture<MescoursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MescoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
