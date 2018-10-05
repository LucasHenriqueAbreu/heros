import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
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
	 * Pesquisa todos os itens.
	 */
  findAll(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters?apikey=${this.apiKey}`);
  }

}