
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { GlobalService } from './app/global.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    GlobalService
]);
