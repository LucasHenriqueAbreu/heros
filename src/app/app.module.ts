import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwUpdate } from '@angular/service-worker';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { BlankComponent } from './layout/blank/blank.component';
import { ConfirmDialogModule } from './layout/confirm-dialog/confirm-dialog.module';
import { InputSearchModule } from './layout/input-search/input-search.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NotificationService } from './layout/notification/notification.service';
import { ApiService } from './services/api.service';
import { LocalStorageService } from './services/local-storage.service';
import { DetailsComicComponent } from './views/details/details-comic/details-comic.component';
import { DetailsComponent } from './views/details/details.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';



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
    MatTabsModule,
    MatSnackBarModule,
    ConfirmDialogModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    MatExpansionModule,

    ROUTES

  ],
  entryComponents: [
    DetailsComicComponent
  ],
  providers: [
    ApiService,
    MatDialog,
    LocalStorageService,
    SwUpdate,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
