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


  constructor() { }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


 triggerUpdate() {
    this.updateEvent.next();
  }



  deconnecter() {
    localStorage.clear();
    this.triggerUpdate(); // Informez les composants abonnés du changement (déconnexion)
  }



}
