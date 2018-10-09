import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './laytouts/navbar/navbar.component';
import { DetailsComponent } from './views/details/details.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { BlankComponent } from './laytouts/blank/blank.component';
import { HomeComponent } from './views/home/home.component';
import { FavoritesComponent } from './views/favorites/favorites.component';

const routes: Routes = [
    // Main redirect
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // App views
    {
        path: '', component: NavbarComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },
    {
        path: '', component: BlankComponent,
        children: [
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ]
    },
    // Handle all other routes
    { path: '**', component: PageNotFoundComponent }
];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
