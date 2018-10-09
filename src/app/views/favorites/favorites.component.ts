import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Character } from '../../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    public localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.characters = this.localStorageService.getAll();
  }

  /**
   * Retorna a url da imagem preparada para renderização.
   * @param character 
   */
  getUrlImg(character: Character) {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }

  /**
   * Redireciona para a tela de detalhes do char
   * @param character 
   */
  showDetail(character: Character) {
    this.router.navigate(['details', character.id]);
  }

  /**
   * Remove um item da localStorage
   * @param character 
   */
  delete(character: Character) {
    this.localStorageService.delete(character);
  }

  /**
   * Pesquisa na localstorage characters que o nome contenha os caracteres da query
   * @param query 
   */
  searchCharacter(query: any) {
    this.characters = this.localStorageService.findByName(query);
  }
}
