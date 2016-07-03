import { provideRouter, RouterConfig }  from '@angular/router';
import { StyleguideComponent } from './styleguide.component';


const routes: RouterConfig = [
  {
    path: 'styleguide',
    component: StyleguideComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];