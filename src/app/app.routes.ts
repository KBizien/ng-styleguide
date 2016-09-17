import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyleguideComponent } from './styleguide.component';
import { RankingListComponent } from './ranking-list.component';
import { RankingDetailComponent } from './ranking-detail.component';

const appRoutes: Routes = [
  {  path: '',
     redirectTo: 'rankings',
     pathMatch: 'full'
  },
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
