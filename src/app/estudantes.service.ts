import { Estudantes } from './estudantes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {

  url = "http://localhost:3000/estudantes/";

  constructor(private http: HttpClient) { }

  getEstudantes(): Observable <Estudantes[]>{

    return this.http.get<Estudantes[]>(this.url);
  }

  save(client: Estudantes): Observable <Estudantes>{
    return this.http.post<Estudantes>(this.url, client);
  }

  delEstudant(cliente: Estudantes): Observable<void>{
    return this.http.delete<void>(this.url + "/" + cliente.id);
  }

  updateEstudant(cliente: Estudantes): Observable<Estudantes>{
    return this.http.put<Estudantes>(this.url + "/" + cliente.id, cliente);
  }

}



