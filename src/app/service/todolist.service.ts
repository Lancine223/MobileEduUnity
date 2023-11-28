import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TodoList } from '../model/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  private baseUrl = 'http://localhost:8080/todo'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient) { }

  triggerUpdate() {
    this.updateEvent.next();
  }

  ajouterTache(todoList: TodoList): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajouter`, todoList);
  }

  modifierTache(todoList: TodoList): Observable<any> {
    return this.http.put(`${this.baseUrl}/modifier`, todoList);
  }

  supprimerTache(todoList: TodoList): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: todoList,
    };

    return this.http.delete(`${this.baseUrl}/supprimer`, options);
  }

  listerTaches(idEtudiant: number): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(`${this.baseUrl}/list/${idEtudiant}`);
  }

  marquerComplet(idTodoList: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/complete/${idTodoList}`, null);
  }
}
