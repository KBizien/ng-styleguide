import { Component } from '@angular/core';
import { RankingService } from './ranking.service';
import { Ranking } from './ranking';
import { RankingItemComponent } from './ranking-item.component';
import { SearchByName } from './search.pipe';

@Component({
  selector: 'ranking-list',
  pipes : [SearchByName],
  template: `
				<h3>List of all Rankings</h3>
				<input type="text" [(ngModel)]="filterRankings" placeholder="Filtering rankings..." />
				<div>
					<ranking-item [ranking]="ranking" *ngFor="let ranking of (rankings | searchByName : filterRankings)"></ranking-item>
				</div>
  `,
  providers : [RankingService],
  directives : [RankingItemComponent],
})

export class RankingListComponent {
	rankings: Ranking[];
	filterRankings : string;

	constructor(private rankingService: RankingService) {
		this.filterRankings = "";
	}

	getRankings() {
		this.rankingService.getRankings().then( rankings => this.rankings = rankings);
	}
	ngOnInit() {
		this.getRankings();
	}
}
