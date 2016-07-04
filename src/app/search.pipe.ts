import { Pipe, PipeTransform } from '@angular/core';

import { Ranking } from './ranking';

@Pipe({ name: 'searchByName' })
export class SearchByName implements PipeTransform {
  transform(allRankings: Ranking[], term) {
  	if(allRankings === undefined || term == undefined) return allRankings;
    return allRankings.filter((ranking) => ranking.name.toLowerCase().indexOf(term.toLowerCase()) != -1);
  }
}