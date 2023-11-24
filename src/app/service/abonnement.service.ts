import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  private baseUrl = 'http://localhost:8080/abonnement'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


 triggerUpdate() {
    this.updateEvent.next();
  }

  getListeAbonnementByEtudiant(idEtudiant: number): Observable<any> {
    const url = `${this.baseUrl}/list/${idEtudiant}`;
    return this.http.get(url);
  }

  createBestAbonnement(idEtudiant: number, abonnement: any): Observable<any> {
    const url = `${this.baseUrl}/best/${idEtudiant}`;
    return this.http.post(url, abonnement);
  }

}
