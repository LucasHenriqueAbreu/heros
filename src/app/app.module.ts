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
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { BlankComponent } from './layout/blank/blank.component';
import { InputSearchModule } from './layout/input-search/input-search.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ApiService } from './services/api.service';
import { LocalStorageService } from './services/local-storage.service';
import { DetailsComicComponent } from './views/details/details-comic/details-comic.component';
import { DetailsComponent } from './views/details/details.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NotificationService } from './layout/notification/notification.service';
import { ConfirmDialogModule } from './layout/confirm-dialog/confirm-dialog.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



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

    ROUTES,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
