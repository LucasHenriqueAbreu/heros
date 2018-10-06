import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { MatToolbar } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /* header DOM element with md-page-header attribute */
  @ViewChild('pageheader') header: ElementRef;
  /* Store header dimensions to initialize header styling */
  baseDimensions: any //this.header.getBoundingClientRect();
  /* DOM element with md-header-title attribute (title in toolbar) */
  @ViewChild('headertitle') title: ElementRef;
  /* DOM element with md-header-picture attribute (picture in header) */
  @ViewChild('headerpicture') picture: ElementRef;
  /* DOM element with main-fab class (a DOM element which contains the main float action button element) */
  @ViewChild('mainfab') fab: ElementRef;
  /*Elemento do DOM que representa o toolbar */
  @ViewChild('toolbar') toolbar: MatToolbar;
  /* The height of a toolbar by default in Angular Material */
  legacyToolbarH = 64;
  /* The mid-height of a float action button by default in Angular Material */
  legacyFabMid = 56 / 2;
  /* The zoom scale of the toolbar title when it's placed at the bottom of the header picture */
  titleZoom = 1.5;
  /* The primary color palette used by Angular Material */
  primaryColor = [63, 81, 181];

  showMainFab = true;


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.baseDimensions = this.header.nativeElement.getBoundingClientRect();
    this.styleInit();
    this.handleStyle(this.baseDimensions);
  }


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


  @HostListener("window:resize", ["$event"])
  resize(event: UIEvent): void {
    this.baseDimensions = this.header.nativeElement.getBoundingClientRect();
    this.handleStyle(this.baseDimensions);
  }

  @HostListener("window:scroll", ["$event"])
  scroll(event: UIEvent): void {
    let dimensions = this.header.nativeElement.getBoundingClientRect();
    this.handleStyle(dimensions);
  }

  hasClass(element: ElementRef, _class: string): boolean {
    return element.nativeElement.classList.contains(_class);
  }

}
