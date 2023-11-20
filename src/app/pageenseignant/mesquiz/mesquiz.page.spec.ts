import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesquizPage } from './mesquiz.page';

describe('MesquizPage', () => {
  let component: MesquizPage;
  let fixture: ComponentFixture<MesquizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesquizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
