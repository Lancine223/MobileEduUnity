import { Injectable } from '@angular/core';
import { Enseignant } from '../model/enseignant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  private enseignant1 : Enseignant|undefined;

  constructor() { }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


  triggerUpdate() {
    this.updateEvent.next();
  }
  setEnseignantConnect(enseignant : Enseignant) {
    this.enseignant1 = enseignant;
  }
  getEnseignantConnect():Enseignant |undefined {
    return this.enseignant1;
  }
}
