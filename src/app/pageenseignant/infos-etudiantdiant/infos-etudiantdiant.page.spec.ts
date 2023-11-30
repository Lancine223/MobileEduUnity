import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfosEtudiantdiantPage } from './infos-etudiantdiant.page';

describe('InfosEtudiantdiantPage', () => {
  let component: InfosEtudiantdiantPage;
  let fixture: ComponentFixture<InfosEtudiantdiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfosEtudiantdiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
