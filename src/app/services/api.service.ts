import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.api_url;
  private apiKey = environment.public_key;
  

  constructor(private httpClient: HttpClient) { }

	/**
	 * Pesquisa as filiais par uma empresa do usuário logado.
	 */
  findAll(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters?apikey=${this.apiKey}`);
  }

}
