import { provideRouter, RouterConfig }  from '@angular/router';
import { StyleguideComponent } from './styleguide.component';
import { RankingListComponent } from './ranking-list.component';
import { RankingDetailComponent } from './ranking-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    component: RankingListComponent
  },
  {
    path: 'styleguide',
    component: StyleguideComponent
  },
  {
    path: 'rankings',
    component: RankingListComponent
  },
  {
  	path: 'ranking/:id',
  	component: RankingDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];