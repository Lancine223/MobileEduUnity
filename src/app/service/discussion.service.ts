import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Discussion } from '../model/discussion';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {


  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  private baseUrl = 'http://localhost:8080/discussion'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient
    ) { }
  triggerUpdate() {
    this.updateEvent.next();
  }

  getListeDiscussions(idForum: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list/${idForum}`);
  }



  ajouterDiscussion(discussion: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, discussion);
  }

  supprimerDiscussion(discussion: Discussion): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/supprimer`, { body: discussion });
  }
}
