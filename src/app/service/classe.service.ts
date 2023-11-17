import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Classe } from '../model/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  private baseUrl = 'http://localhost:8080/classe'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient) { }
  triggerUpdate() {
    this.updateEvent.next();
  }

  // Ajouter une classe
  ajouterClasse(classe: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, classe);
  }

  // Récupérer la liste des classes
  getAllClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  // Récupérer la liste des classes par filières
  getClassesByFiliere(idFiliere: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/list/${idFiliere}`);
  }

  // Récupérer une classe par son ID
  getOneClasse(idClasse: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/read/${idClasse}`);
  }

  // Modifier une classe
  modifierClasse(classe: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/modifier`, classe);
  }

  // Supprimer une classe
  supprimerClasse(classe: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer`, { body: classe });
  }

}
