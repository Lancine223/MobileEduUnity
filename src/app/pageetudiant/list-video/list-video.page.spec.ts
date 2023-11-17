import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListVideoPage } from './list-video.page';

describe('ListVideoPage', () => {
  let component: ListVideoPage;
  let fixture: ComponentFixture<ListVideoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
