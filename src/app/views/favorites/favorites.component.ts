import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Character } from '../../models/character';
import { Router } from '@angular/router';
import { ConfirmDialogService } from '../../layout/confirm-dialog/confirm-dialog.service';
import { NotificationService } from '../../layout/notification/notification.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private confirmDialogService: ConfirmDialogService,
    private notificationService: NotificationService
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
    this.confirmDialogService.confirm(`Delete ${character.name}`, `Are you sure you want to remove ${character.name} from your bookmarks? `).subscribe(res => {
      if (res){
        this.localStorageService.delete(character);
        this.notificationService.showMessage("Successfully removed from bookmarks", "OK", 5000);
      }
    })
  }

  /**
   * Pesquisa na localstorage characters que o nome contenha os caracteres da query
   * @param query 
   */
  searchCharacter(query: any) {
    this.characters = this.localStorageService.findByName(query);
  }
}
