import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscussionEtudiantPage } from './discussion-etudiant.page';

describe('DiscussionEtudiantPage', () => {
  let component: DiscussionEtudiantPage;
  let fixture: ComponentFixture<DiscussionEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscussionEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
