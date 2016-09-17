import { NgModule }      from '@angular/core';

import { routing } from './app/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';

import { AppComponent }  from './app/app.component';
import { RankingListComponent } from './app/ranking-list.component';
import { RankingItemComponent } from './app/ranking-item.component';
import { RankingDetailComponent } from './app/ranking-detail.component';
import { StyleguideComponent } from './app/styleguide.component';

import { OrderByPoints } from './app/orderByPoints.pipe';
import { SearchByName } from './app/search.pipe';

import { GlobalService } from './app/global.service';
import { RankingService } from './app/ranking.service';

@NgModule({
  imports: [
      BrowserModule,
      routing,
      HttpModule,
      FormsModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
      AppComponent,
      RankingListComponent,
      RankingItemComponent,
      RankingDetailComponent,
      StyleguideComponent,

      OrderByPoints,
      SearchByName
  ],
  bootstrap: [
      AppComponent
  ],
  providers: [
      GlobalService,
      RankingService
  ]
})
export class AppModule { }