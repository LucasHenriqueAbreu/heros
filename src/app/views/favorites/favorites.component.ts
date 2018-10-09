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


  getUrlImg(character: Character) {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }

  showDetail(character: Character) {
    this.router.navigate(['details', character.id]);
  }

  delete(character: Character) {
    this.localStorageService.delete(character);
  }

}
