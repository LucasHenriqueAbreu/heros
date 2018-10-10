import { Component, ElementRef, HostListener, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatToolbar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from '../../layout/notification/notification.service';
import { Character } from '../../models/character';
import { Comic } from '../../models/comic';
import { Event } from '../../models/event';
import { Image } from '../../models/image';
import { Serie } from '../../models/serie';
import { Story } from '../../models/story';
import { ApiService } from '../../services/api.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DetailsComicComponent } from './details-comic/details-comic.component';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: Character = new Character();
  comics: Comic[] = [];
  events: Event[] = [];
  series: Serie[] = [];
  stories: Story[] = [];
  pathImg: string = '';

  @ViewChild('pageheader') header: ElementRef;
  // @ViewChild('headertitle') title: ElementRef;
  @ViewChild('headerpicture') picture: ElementRef;
  @ViewChild('mainfab') fab: ElementRef;
  @ViewChild('toolbar') toolbar: MatToolbar;

  baseDimensions: any
  legacyToolbarH = 64;
  legacyFabMid = 56 / 2;
  titleZoom = 1.5;
  primaryColor = [63, 81, 181];
  showMainFab = true;
  expandPhoto = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog,
    public localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.baseDimensions = this.header.nativeElement.getBoundingClientRect();
    this.getCharacterData(this.route.snapshot.paramMap.get('id'));
    this.handleStyle(this.baseDimensions);
  }

  /**
   * Busca na API um character por id
   * @param id 
   */
  getCharacterData(id: string): void {
    this.apiService.findById(id).subscribe(res => {
      this.character = res.data.results[0];
      this.pathImg = this.getUrlImg(this.character.thumbnail);
    }, err => { console.log(err) });

    this.apiService.getComics(id).subscribe(res => {
      this.comics = res.data.results;
    });

    this.apiService.getEvents(id).subscribe(res => {
      this.events = res.data.results;
    });
    this.apiService.getSeries(id).subscribe(res => {
      this.series = res.data.results;
    });
    this.apiService.getStories(id).subscribe(res => {
      this.stories = res.data.results;
    });

  }

  handleStyle(dim): void {
    this.fab.nativeElement.style.top = (dim.height - this.legacyFabMid) + 'px';
    if ((dim.bottom - this.baseDimensions.top) > this.legacyToolbarH) {
      this.toolbar._elementRef.nativeElement.style.height = (dim.bottom - this.baseDimensions.top) + 'px';
    } else {
      this.toolbar._elementRef.nativeElement.style.height = this.legacyToolbarH + 'px';
    }
    if ((dim.bottom - this.baseDimensions.top) < this.legacyToolbarH * 2 && !this.hasClass(this.fab, 'hide')) {
      this.showMainFab = false;
    }
    if ((dim.bottom - this.baseDimensions.top) > this.legacyToolbarH * 2 && this.hasClass(this.fab, 'hide')) {
      this.showMainFab = true;
    }
    this.toolbar._elementRef.nativeElement.style.backgroundColor = 'rgba(' + this.primaryColor[0] + ',' + this.primaryColor[1] + ',' + this.primaryColor[2] + ',' + (1 - this.ratio(dim)) + ')';
    this.picture.nativeElement.style.backgroundPosition = '50% ' + (this.ratio(dim) * 50) + '%';
  }

  ratio(dim) {
    let r = (dim.bottom - this.baseDimensions.top) / dim.height;
    if (r < 0) return 0;
    if (r > 1) return 1;
    return Number(r.toString().match(/^\d+(?:\.\d{0,2})?/));
  }


  /**
   * Listener para o evento de resize da tela. Quando o resize é realizado pelo usuário 
   * realiza o recalculo dos styles da tela.
   * @param event 
   */
  @HostListener("window:resize", ["$event"])
  resize(event: UIEvent): void {
    this.scrollTop();
    this.baseDimensions = this.header.nativeElement.getBoundingClientRect();
    this.handleStyle(this.baseDimensions);
  }

  scrollTop() {
    this.document.body.scrollTop = this.document.documentElement.scrollTop = 0;
  }
  /**
   * Listener para o evento de scroll da tela. Quando o scroll é realizado pelo usuário 
   * realiza o recalculo dos styles da tela.
   * @param event 
   */
  @HostListener("window:scroll", ["$event"])
  scroll(event: UIEvent): void {
    let dimensions = this.header.nativeElement.getBoundingClientRect();
    this.handleStyle(dimensions);
  }

  /**
   * Valida se o elemento possui uma determinada classe css
   * @param element 
   * @param _class 
   */
  hasClass(element: ElementRef, _class: string): boolean {
    return element.nativeElement.classList.contains(_class);
  }

  /**
   * Redireciona para o home
   */
  back() {
    this.router.navigate(['home']);
  }

  /**
   * Cria uma url para renderizar a imagem do
   * @param thumbnail 
   */
  getUrlImg(thumbnail: Image): string {
    return thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : '';
  }

  /**
   * Abre o modal com mais detalhes sobre o comic.
   * @param comic 
   */
  openDetailsComic(comic: Comic) {
    this.dialog.open(DetailsComicComponent, {
      panelClass: 'my-full-screen-dialog',
      data: comic
    });
  }

  /**
  * Abre o modal com mais detalhes sobre o event.
  * @param event 
  */
  openDetailsEvent(event: Event) {
    this.dialog.open(DetailsComicComponent, {
      panelClass: 'my-full-screen-dialog',
      data: event
    });
  }

  /**
  * Abre o modal com mais detalhes sobre o serie.
  * @param serie 
  */
  openDetailsSerie(serie: Serie) {
    this.dialog.open(DetailsComicComponent, {
      panelClass: 'my-full-screen-dialog',
      data: serie
    });
  }

  /**
  * Abre o modal com mais detalhes sobre o story.
  * @param story 
  */
  openDetailsStory(story: Story) {
    this.dialog.open(DetailsComicComponent, {
      panelClass: 'my-full-screen-dialog',
      data: story
    });
  }


  /**
   * Salva na localStorage os heróis favoritos.
   * @param character 
   */
  makeBookmark(character: Character) {
    this.localStorageService.create(character);
    this.notificationService.showMessage("Successfully added to favorites", "OK", 5000);
  }

}
