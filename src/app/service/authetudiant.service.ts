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

  private etudiant1 : Etudiant|any;
  public isAuthEtudiant : boolean = false;

  constructor() { }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


 triggerUpdate() {
    this.updateEvent.next();
  }
 


  deconnecter() {
    localStorage.clear();
    this.triggerUpdate();
  }

}
