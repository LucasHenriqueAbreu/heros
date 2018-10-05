import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes: any[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.findAll().subscribe(res => this.heroes = res.data.results, err => console.log(err));
  }

  getUrlImg(hero: any) {
    return `${hero.thumbnail.path}/standard_amazing.${hero.thumbnail.extension}`;
  }
}
