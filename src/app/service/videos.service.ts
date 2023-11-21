import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Videos } from '../model/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private baseUrl = 'http://localhost:8080/video';

  constructor(private http: HttpClient) {}

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

 triggerUpdate() {
    this.updateEvent.next();
  }

  createVideos(videos: any, video: File): Observable<any> {
    const formData = new FormData();
    formData.append('videos', JSON.stringify(videos));
    formData.append('video', video);

    return this.http.post(`${this.baseUrl}/create`, formData);
  }


  getListeByEnseignant(idEnseignant: number): Observable<Videos[]> {
    const url = `${this.baseUrl}/listvideos/${idEnseignant}`;
    return this.http.get<Videos[]>(url);
  }

  deleteVideos(videos: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: videos
    };

    return this.http.delete(`${this.baseUrl}/delete`, httpOptions);
  }
}
