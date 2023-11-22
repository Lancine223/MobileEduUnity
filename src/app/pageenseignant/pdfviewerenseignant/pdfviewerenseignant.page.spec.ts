import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfviewerenseignantPage } from './pdfviewerenseignant.page';

describe('PdfviewerenseignantPage', () => {
  let component: PdfviewerenseignantPage;
  let fixture: ComponentFixture<PdfviewerenseignantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PdfviewerenseignantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
