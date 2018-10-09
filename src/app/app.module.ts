import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialog,
  MatDialogModule,
  MatDividerModule,
  MatTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsComponent } from './views/details/details.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BlankComponent } from './layout/blank/blank.component';
import { DetailsComicComponent } from './views/details/details-comic/details-comic.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { LocalStorageService } from './services/local-storage.service';
import { InputSearchModule } from './layout/input-search/input-search.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsComponent,
    PageNotFoundComponent,
    BlankComponent,
    HomeComponent,
    DetailsComicComponent,
    FavoritesComponent
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,

    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    InputSearchModule,

    ROUTES,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    DetailsComicComponent
  ],
  providers: [
    ApiService,
    MatDialog,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
