import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Character } from '../../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  characters: Character[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.findAll().subscribe(res => {
      this.characters = res.data.results;
      console.log(this.characters);
    }, err => console.log(err));
  }

  getUrlImg(character: Character) {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }

  showDetail(character: Character) {
    this.router.navigate(['details', character.id]);
  }
}
