import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant';
import { Apropos } from '../model/apropos';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  private apiUrl = 'http://localhost:8080';
  private baseUrl = 'http://localhost:8080/enseignant/'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient
    ) { }
  triggerUpdate() {
    this.updateEvent.next();
  }

  createEnseignant(enseignantpodjo:any, diplome: File){
    const formData = new FormData();
    formData.append('enseignantpodjo', JSON.stringify(enseignantpodjo));
    formData.append('diplome', diplome);
    return this.http.post<any>(this.baseUrl +'podjocreate', formData);
  }

  login(email: string, motDePasse: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const body = new URLSearchParams();
    body.set('email', email);
    body.set('motDePasse', motDePasse);

    return this.http.post(`${this.baseUrl}login`, body.toString(), { headers });
  }

  getEnseignantList():Observable<any> {
    return this.http.get("http://localhost:8080/enseignant/read");
    // console.log(this.getAdminList());
  }

  getEnseignantListByClasse(idClasse: number):Observable<any> {
    return this.http.get(`${this.baseUrl}list/${idClasse}`);
    // console.log(this.getAdminList());
  }


  creerApropos(apropos: Apropos): Observable<any> {
    return this.http.post(`${this.apiUrl}/apropos/add`, apropos);
  }

  modifierApropos(apropos: Apropos): Observable<any> {
    return this.http.put(`${this.apiUrl}/apropos/modifier`, apropos);
  }

  modifierEnseignant(enseignant: Enseignant): Observable<any> {
    return this.http.put(`${this.baseUrl}modifier`, enseignant);
  }

  getAproposByIdEnseignant(idEnseignant: number): Observable<Apropos> {
    return this.http.get<Apropos>(`${this.apiUrl}/apropos/read/${idEnseignant}`);
  }


}
