import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesvideosPage } from './mesvideos.page';

describe('MesvideosPage', () => {
  let component: MesvideosPage;
  let fixture: ComponentFixture<MesvideosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesvideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
