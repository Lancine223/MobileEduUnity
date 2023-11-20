import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierprofileenseignantComponent } from './modifierprofileenseignant.component';

describe('ModifierprofileenseignantComponent', () => {
  let component: ModifierprofileenseignantComponent;
  let fixture: ComponentFixture<ModifierprofileenseignantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierprofileenseignantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierprofileenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
