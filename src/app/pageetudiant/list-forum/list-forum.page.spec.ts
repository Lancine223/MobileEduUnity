import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListForumPage } from './list-forum.page';

describe('ListForumPage', () => {
  let component: ListForumPage;
  let fixture: ComponentFixture<ListForumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
