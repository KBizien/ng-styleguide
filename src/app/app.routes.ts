import { provideRouter, RouterConfig }  from '@angular/router';
import { StyleguideComponent } from './styleguide.component';
import { RankingListComponent } from './ranking-list.component';

const routes: RouterConfig = [
  {
    path: 'styleguide',
    component: StyleguideComponent
  },
  {
    path: 'rankings',
    component: RankingListComponent
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];