import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Character } from '../../models/character';
import { Router } from '@angular/router';
import { NotificationService } from '../../layout/notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Character[] = [];
  offset: number = 0;
  limit: number = 20;
  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters(this.limit, this.offset);
  }

  /**
   * Busca todos characters com paginação.
   * @param limit 
   * @param offset 
   */
  getAllCharacters(limit: number, offset: number): void {
    this.loading = true;
    this.apiService.findAll(limit, offset).subscribe(res => {
      this.characters = this.characters.concat(res.data.results);
      this.loading = false;
    }, () => {
      this.notificationService.showMessage("Could not fetch items.", "OK", 5000);
    });
  }

  getUrlImg(character: Character) {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }

  showDetail(character: Character) {
    this.router.navigate(['details', character.id]);
  }

  /**
   * Método chamado na pesquisa por nome.
   * @param query 
   */
  searchCharacter(query: string) {
    this.offset = 0;
    this.apiService.findByName(this.limit, this.offset, query).subscribe(res => {
      if (res.length <= 0) this.notificationService.showMessage(`No character was found with the name: "${query}"`, "OK", 5000);
      this.characters = res.data.results;
    }, () => {
      this.notificationService.showMessage("Could not load characters", "OK", 5000);
    })
  }

  /**
	 * Método executado no evento de scroll da lista, apenas quando o scroll está quase chegando no fim da lista.
     * Vai para  próxima página.
     */
  onScrollDown() {
    this.offset += 20;
    this.getAllCharacters(this.limit, this.offset);
  }
}
