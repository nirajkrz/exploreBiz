import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    {path: 'notfound', loadChildren: 'app/not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: !environment.production,
                preloadingStrategy: PreloadAllModules
            })
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
