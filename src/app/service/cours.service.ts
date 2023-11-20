import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseUrl = 'http://localhost:8080/cours';

  constructor(private http: HttpClient) {}

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

 triggerUpdate() {
    this.updateEvent.next();
  }

  createCours(cours: any, document: File): Observable<any> {
    const formData = new FormData();
    formData.append('cours', JSON.stringify(cours));
    formData.append('document', document);

    return this.http.post(`${this.baseUrl}/create`, formData);
  }

  updateCours(id: number, cours: any, document: File): Observable<any> {
    const formData = new FormData();
    formData.append('cours', JSON.stringify(cours));
    formData.append('document', document);

    return this.http.put(`${this.baseUrl}/modifier/${id}`, formData);
  }

  getListeByEnseignant(idEnseignant: number): Observable<Cours[]> {
    const url = `${this.baseUrl}/list/${idEnseignant}`;
    return this.http.get<Cours[]>(url);
  }

  deleteCours(cours: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: cours
    };

    return this.http.delete(`${this.baseUrl}/delete`, httpOptions);
  }

}
