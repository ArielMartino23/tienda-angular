import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { server } from './server-list/server';

const URL = 'https://636d2f67ab4814f2b27b57fd.mockapi.io/api/v1/server';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<server[]>{

    return this.http.get<server[]>(URL)
                    .pipe(
                      tap((server: server[]) => server.forEach(server => server.quantity = 0))
                    );
  }
}
