import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Image } from '../../../models/image';
import { Creator } from '../../../models/creator';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-details-creator',
  templateUrl: './details-creator.component.html',
  styleUrls: ['./details-creator.component.css']
})
export class DetailsCreatorComponent implements OnInit {

  creator: Creator = new Creator();
  loading = false;
  constructor(
    public dialogRef: MatDialogRef<DetailsCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.findCreatorByName(this.data).subscribe(res => {
      this.creator = res.data.results[0];
      this.loading = false;
    })
  }

  /**
  * Cria uma url para renderizar a imagem do
  * @param thumbnail 
  */
  getUrlImg(thumbnail: Image): string {
    return thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : '';
  }


}
