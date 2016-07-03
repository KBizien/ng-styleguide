import { provideRouter, RouterConfig }  from '@angular/router';
import { StyleguideComponent } from './styleguide.component';
import { BreweryListComponent } from './brewery-list.component';

const routes: RouterConfig = [
  {
    path: 'styleguide',
    component: StyleguideComponent
  },
  {
    path: 'breweryList',
    component: BreweryListComponent
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];