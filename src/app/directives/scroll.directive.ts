/*
 * 'scroll' Angular Directive
 * Usado para manipular o cabeçalho da página durante o evento de rolagem (e também o evento rezise) da janela.
 */

import { Directive, ViewChild } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {

  @ViewChild('page-header') input; 

  constructor() {
    console.log(this.input);
  }



}
