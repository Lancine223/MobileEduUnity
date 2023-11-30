import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddeditdiscussionenseignantComponent } from './addeditdiscussionenseignant.component';

describe('AddeditdiscussionenseignantComponent', () => {
  let component: AddeditdiscussionenseignantComponent;
  let fixture: ComponentFixture<AddeditdiscussionenseignantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdiscussionenseignantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddeditdiscussionenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
