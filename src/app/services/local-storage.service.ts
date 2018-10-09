import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  characters: any[] = [];

  constructor() { }

  /**
   * Retorna todos os characters salvos na localstorage
   */
  getAll() {
    if(localStorage.getItem('characters') === null) {
      this.characters = [];
    } else {
      this.characters = JSON.parse(localStorage.getItem('characters'));
    }
    return this.characters;
  }

  /**
   * Salva um novo charaacter na localstorage
   * @param character 
   */
  create(character: any) {
    this.characters.push(character);
    let characters = [];
    if(localStorage.getItem('characters') === null) {
      characters = [];
      characters.push(character);
      localStorage.setItem('characters', JSON.stringify(characters));
    } else {
      characters = JSON.parse(localStorage.getItem('characters'));
      characters.push(character); 
      localStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  /**
   * Remove um character da localstorage.
   * @param character 
   */
  delete(character: any) {
    for (let i = 0; i < this.characters.length; i++) {
      if (character.id == this.characters[i].id) {
        this.characters.splice(i, 1);
        localStorage.setItem('characters', JSON.stringify(this.characters));
      }
    }
  }
}
