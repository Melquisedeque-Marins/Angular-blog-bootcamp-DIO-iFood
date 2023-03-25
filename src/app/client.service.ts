import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { dataModel} from './data/dataFake';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'viacep.com.br/ws/01001000/json/';
  constructor(private http: HttpClient) { }

  getCEP(): Observable<dataModel[]> {
    return this.http.get<dataModel[]>(this.url)
  }
}
