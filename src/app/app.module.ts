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
  MatDividerModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './laytouts/navbar/navbar.component';
import { DetailsComponent } from './views/details/details.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ROUTES } from './app.routes';
import { BlankComponent } from './laytouts/blank/blank.component';
import { HomeComponent } from './views/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FavoritesComponent } from './views/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsComponent,
    PageNotFoundComponent,
    BlankComponent,
    HomeComponent,
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
    MatDividerModule,

    ROUTES,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
