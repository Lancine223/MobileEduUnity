import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscuterforumenseignantPage } from './discuterforumenseignant.page';

describe('DiscuterforumenseignantPage', () => {
  let component: DiscuterforumenseignantPage;
  let fixture: ComponentFixture<DiscuterforumenseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscuterforumenseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
