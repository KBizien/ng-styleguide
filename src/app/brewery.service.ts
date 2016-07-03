import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Brewery } from './brewery';
import { GlobalService } from './global.service';

@Injectable()
export class BreweryService {
  private baseUrl: String;

  constructor(private http: Http, private globalService: GlobalService) {
    this.baseUrl = globalService.getBaseUrl();
  }

  getBreweries(): Promise<Brewery[]> {
    return this.http.get(this.baseUrl+"/breweries")
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getBrewery(id: number) : Promise<Brewery> {
     return this.http.get(this.baseUrl+"/brewery/"+id)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error) {
    console.error(error);
  }
}