import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierprofileetudiantComponent } from './modifierprofileetudiant.component';

describe('ModifierprofileetudiantComponent', () => {
  let component: ModifierprofileetudiantComponent;
  let fixture: ComponentFixture<ModifierprofileetudiantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierprofileetudiantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierprofileetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
