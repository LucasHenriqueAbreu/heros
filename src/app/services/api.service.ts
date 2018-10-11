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
   * Pesquisa todos os itens com uma paginação
   * @param limit 
   * @param offset 
   */
  findAll(limit: number, offset: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters?limit=${limit}&offset=${offset}&apikey=${this.apiKey}`);
  }

  /**
   * Pesquisa todos os itens que contém o nome passado no parâmetro query com uma paginação
   * @param limit 
   * @param offset 
   * @param query 
   */
  findByName(limit: number, offset: number, query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters?nameStartsWith=${query}&limit=${limit}&offset=${offset}&apikey=${this.apiKey}`);
  }

  /**
   * Pesquisa um character na api da marvel.
   * @param id 
   */
  findById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters/${id}?apikey=${this.apiKey}`);
  }

  /**
   * Busca as HQs com mais detalhes para um char.
   * @param id 
   */
  getComics(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters/${id}/comics?apikey=${this.apiKey}`);
  }

  getEvents(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters/${id}/events?apikey=${this.apiKey}`);
  }
  getSeries(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters/${id}/series?apikey=${this.apiKey}`);
  }
  getStories(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}characters/${id}/stories?apikey=${this.apiKey}`);
  }

  /**
   * Busca um creator por seu id.
   * @param id 
   */
  findCreatorByName(name: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}creators?nameStartsWith=${name}&apikey=${this.apiKey}`);
  }

}
