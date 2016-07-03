import { Injectable }    from '@angular/core';

@Injectable()
export class GlobalService {

  private baseUrl : String = 'http://api.brewerydb.com/v2';  // URL to web api
  private apiKey : String = '42a3096ac662521cc41a08fda427e91b';

  constructor() { }

  getBaseUrl(): String {
    return this.baseUrl;
  }
  getApiKey(): String {
     return this.apiKey;
  }
}