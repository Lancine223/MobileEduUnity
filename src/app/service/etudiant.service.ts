import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, map, tap } from 'rxjs';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant';
import { StatusEtudiant } from '../model/status-etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();



  private baseUrl = 'http://localhost:8080/etudiant/'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient
    ) { }
  triggerUpdate() {
    this.updateEvent.next();
  }
  creerEtudiant(etudiant: any): Observable<any> {
    const url = 'http://localhost:8080/etudiant/podjocreate';

    return this.http.post(url, etudiant, { responseType: 'text' })
      .pipe(
        map(response => {
          try {
            return JSON.parse(response); // Try to parse the response as JSON
          } catch (error) {
            return response; // If parsing fails, return the original response
          }
        }),
        catchError(error => {
          console.error('Erreur lors de la requête :', error);
          throw error; // Rethrow the error after logging
        })
      );
}

  login(telephone: string, motDePasse: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = new URLSearchParams();
    body.set('telephone', telephone);
    body.set('motDePasse', motDePasse);

    return this.http.post(`${this.baseUrl}login`, body.toString(), { headers });
  }

  createstatusEtudiant(statusEtudiant: any, bulletin: File): Observable<any> {
    const formData = new FormData();
    formData.append('statusEtudiant', JSON.stringify(statusEtudiant));
    formData.append('bulletin', bulletin);

    return this.http.post('http://localhost:8080/status/create', formData);
  }

  updateStatusEtudiant(id: number, statusEtudiant: StatusEtudiant, bulletin: File ): Observable<StatusEtudiant> {
    const formData = new FormData();
    formData.append('statusEtudiant', JSON.stringify(statusEtudiant));
    formData.append('bulletin', bulletin);
    return this.http.put<any>('http://localhost:8080/status/update/' + id, formData)
  }

  getBulletin(idEtudiant: number): Observable<StatusEtudiant> {
    return this.http.get<StatusEtudiant>(`http://localhost:8080/status/read/${idEtudiant}`);
  }

  modifierEnseignant(etudiant: Etudiant): Observable<any> {
    return this.http.put(`${this.baseUrl}modifier`, etudiant);
  }

  getEtudiantList():Observable<any> {
    return this.http.get("http://localhost:8080/etudiant/list");
    // console.log(this.getAdminList());
  }
}
