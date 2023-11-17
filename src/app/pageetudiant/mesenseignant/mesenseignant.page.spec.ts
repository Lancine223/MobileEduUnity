import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesenseignantPage } from './mesenseignant.page';

describe('MesenseignantPage', () => {
  let component: MesenseignantPage;
  let fixture: ComponentFixture<MesenseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesenseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
