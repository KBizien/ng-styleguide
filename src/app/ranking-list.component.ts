import { Component } from '@angular/core';
import { Ranking } from './ranking';
import { RankingService } from './ranking.service';

@Component({
  selector: 'ranking-list',
  template: `
				<h3>List of all Rankings</h3>
				<input type="text" [(ngModel)]="filterRankings" placeholder="Filtering rankings..." />
				<div>
					<ranking-item [ranking]="ranking" *ngFor="let ranking of (rankings | searchByName : filterRankings)"></ranking-item>
				</div>
  `,
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
