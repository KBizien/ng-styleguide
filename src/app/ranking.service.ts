import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ranking } from './ranking';
import { GlobalService } from './global.service';

@Injectable()
export class RankingService {
  private baseUrl: String;

  constructor(private http: Http, private globalService: GlobalService) {
    this.baseUrl = globalService.getBaseUrl();
  }

  getRankings(): Promise<Ranking[]> {
    return this.http.get(this.baseUrl+"/rankings")
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getRanking(id: number) : Promise<Ranking> {
     return this.http.get(this.baseUrl+"/ranking/"+id)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error) {
    console.error(error);
  }
}