import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  heroes: any[] = [];

  constructor(private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.findAll().subscribe(res => this.heroes = res.data.results, err => console.log(err));
  }

  getUrlImg(hero: any) {
    return `${hero.thumbnail.path}/standard_amazing.${hero.thumbnail.extension}`;
  }
}
