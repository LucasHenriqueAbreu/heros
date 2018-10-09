import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './views/details/details.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { BlankComponent } from './layout/blank/blank.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
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
                path: 'details/:id',
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
