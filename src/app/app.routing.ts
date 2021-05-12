import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full',
  },
  {
    path: 'homepage',
    data: { animation: 'homepage' },
    loadChildren: () => import('./@homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'auth',
    data: { animation: 'auth' },
    loadChildren: () => import('./@auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    data: { animation: 'app' },
    loadChildren: () => import('./@application/application.module').then((m) => m.ApplicationModule),
  },
];

@NgModule({
            imports: [ RouterModule.forRoot(routes,
                                            {
                                              useHash: false,
                                              scrollPositionRestoration: 'enabled',
                                              anchorScrolling: 'enabled',
                                              preloadingStrategy: PreloadAllModules,
                                            },
            ) ],
            exports: [ RouterModule ],
          })
export class AppRouting {}
