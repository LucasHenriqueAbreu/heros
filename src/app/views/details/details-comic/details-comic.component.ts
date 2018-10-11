import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

import { Image } from '../../../models/image';
import { DetailsCreatorComponent } from '../details-creator/details-creator.component';

@Component({
  selector: 'app-details-comic',
  templateUrl: './details-comic.component.html',
  styleUrls: ['./details-comic.component.css']
})
export class DetailsComicComponent {


  constructor(
    public dialogRef: MatDialogRef<DetailsComicComponent>,
    @Inject(MAT_DIALOG_DATA) public comic: any,
    public dialog: MatDialog,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

   /**
   * Cria uma url para renderizar a imagem do
   * @param thumbnail 
   */
  getUrlImg(thumbnail: Image): string {
    return thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : '';
  }

  openDetailsCreator(id: any) {
    this.dialog.open(DetailsCreatorComponent, {
      panelClass: 'my-full-screen-dialog',
      data: id
    });
  }
}
