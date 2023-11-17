import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class AuthetudiantService {

  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  private entudiant1 : Etudiant|undefined;

  constructor() { }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


  triggerUpdate() {
    this.updateEvent.next();
  }
  setEtudiantConnect(etudiant : Etudiant) : void {
    this.entudiant1 = etudiant;
  }
  getEtudiantConnect():Etudiant |undefined {
    return this.entudiant1;
  }
}
