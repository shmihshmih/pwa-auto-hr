import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    component: MainPageComponent,
    path: ''
  },
  {
    component: MainPageComponent,
    path: 'main'
  },
  {
    component: NotFoundComponent,
    path: '404'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
