import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) export class DataService {

  t: any;

  constructor(private http: HttpClient ) { }

  getData(path: any) {
    const data = {
      query: path
    }
    this.t=this.http.post('https://deepgoat.com/training.php', data);
    return this.t;
  }
  
}
