import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public get(url: string, responseType: {} = {responseType: 'json'} ): Observable<any> {
    return this.http.get(url,responseType);
  }

  public post(url: string, params: any): Observable<any> {
    return this.http.post(url, params);
  }

  public put(url: string, params: any): Observable<any> {
    return this.http.put(url, params);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
