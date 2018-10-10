import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Comic } from '../../../models/comic';
import { Image } from '../../../models/image';

@Component({
  selector: 'app-details-comic',
  templateUrl: './details-comic.component.html',
  styleUrls: ['./details-comic.component.css']
})
export class DetailsComicComponent {


  constructor(
    public dialogRef: MatDialogRef<DetailsComicComponent>,
    @Inject(MAT_DIALOG_DATA) public comic: Comic
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

   /**
   * Cria uma url para renderizar a imagem do
   * @param thumbnail 
   */
  getUrlImg(thumbnail: Image): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

}
