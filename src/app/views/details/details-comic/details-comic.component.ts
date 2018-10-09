import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Comic } from '../../../models/comic';

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

}
