import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener, Input } from '@angular/core';
import { MatToolbar, MatDialog } from '@angular/material';
import { Character } from '../../models/character';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Image } from '../../models/image';
import { Comic } from '../../models/comic';
import { DetailsComicComponent } from './details-comic/details-comic.component';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: Character = new Character();
  comics: Comic[] = [];
  pathImg: string = '';

  @ViewChild('pageheader') header: ElementRef;  
  @ViewChild('headertitle') title: ElementRef;
  @ViewChild('headerpicture') picture: ElementRef;
  @ViewChild('mainfab') fab: ElementRef;
  @ViewChild('toolbar') toolbar: MatToolbar;
  
  baseDimensions: any
  legacyToolbarH = 64;
  legacyFabMid = 56 / 2;
  titleZoom = 1.5;
  primaryColor = [63, 81, 181];
  showMainFab = true;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog,
    public localStorageService: LocalStorageService

  ) { }

  ngOnInit(): void {
    this.baseDimensions = this.header.nativeElement.getBoundingClientRect();
    this.getCharacterData(this.route.snapshot.paramMap.get('id'));
    this.styleInit();
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
    })
  }

  /**
   * Seta o style inicial para o titulo (nome do character)
   */
  styleInit(): void {
    this.title.nativeElement.style.paddingLeft = '16px';
    this.title.nativeElement.style.position = 'relative';
    this.title.nativeElement.style.transformOrigin = '24px';
  }

  handleStyle(dim): void {
    this.fab.nativeElement.style.top = (dim.height - this.legacyFabMid) + 'px';
    if ((dim.bottom - this.baseDimensions.top) > this.legacyToolbarH) {
      this.title.nativeElement.style.top = ((dim.bottom - this.baseDimensions.top) - this.legacyToolbarH) + 'px';
      this.toolbar._elementRef.nativeElement.style.height = (dim.bottom - this.baseDimensions.top) + 'px';
      this.title.nativeElement.style.transform = 'scale(' + ((this.titleZoom - 1) * this.ratio(dim) + 1) + ',' + ((this.titleZoom - 1) * this.ratio(dim) + 1) + ')';
    } else {
      this.title.nativeElement.style.top = '5px';
      this.toolbar._elementRef.nativeElement.style.height = this.legacyToolbarH + 'px';
      this.title.nativeElement.style.transform = 'scale(1,1)';
    }
    if ((dim.bottom - this.baseDimensions.top) < this.legacyToolbarH * 2 && !this.hasClass(this.fab, 'hide')) {
      this.showMainFab = false;
    }
    if ((dim.bottom - this.baseDimensions.top) > this.legacyToolbarH * 2 && this.hasClass(this.fab, 'hide')) {
      // this.renderer.removeClass(this.fab, 'hide');
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
    this.baseDimensions = this.header.nativeElement.getBoundingClientRect();
    this.handleStyle(this.baseDimensions);
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
   * Cria uma url para renderizar a imagem do character
   * @param character 
   */
  getUrlImg(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  /**
   * Abre o modal com mais detalhes sobre o comic.
   * @param comic 
   */
  openDetails(comic: Comic) {
    this.dialog.open(DetailsComicComponent, {
      panelClass: 'full-screen-modal',
      data: comic
    });
  }

  /**
   * Salva na localStorage os heróis favoritos.
   * @param character 
   */
  makeBookmark(character: Character) {
    this.localStorageService.create(character);
  }

}
