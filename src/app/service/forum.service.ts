import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Forum } from '../model/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  private baseUrl = 'http://localhost:8080/forum'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient) { }

  triggerUpdate() {
    this.updateEvent.next();
  }


  getListeForums(idEnseignant: number): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.baseUrl}/list/${idEnseignant}`);
  }

  ajouterForum(forum: Forum): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, forum);
  }

  getOneForum(idForum: number): Observable<Forum> {
    return this.http.get<Forum>(`${this.baseUrl}/read/${idForum}`);
  }

  modifierForum(forum: Forum): Observable<any> {
    return this.http.put(`${this.baseUrl}/modifier`, forum);
  }

  supprimerForum(forum: Forum): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/supprimer`, { body: forum });
  }
}
