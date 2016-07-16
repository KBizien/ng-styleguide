import { Component } from '@angular/core';
import { Ranking } from './ranking';
import { RankingService } from './ranking.service';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: 'ranking-detail',
  template: `
		<div *ngIf="ranking">
			<h3>Détail du ranking {{ranking.name}}</h3>
		</div>
  `,
  providers : [RankingService]
})

export class RankingDetailComponent {

  private sub: any;
	ranking: Ranking;

  constructor(private route: ActivatedRoute, private router: Router, private rankingService: RankingService) {
  }

	getRanking(id: number) {
		console.log("PARAMS ID", id);
		this.rankingService.getRanking(id).then( (ranking) => {
			this.ranking = ranking;
		});
	}
	ngOnInit() {
  	this.sub = this.route.params.subscribe( (params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
  		this.getRanking(id);
    });
  }
}
