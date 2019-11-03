import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  DATOS = 'https://restcountries.eu/rest/v2/all';


  constructor(private http: HttpClient) { }

  datosPais()  {
    return this.http.get(`${this.DATOS}`);
    }
}
