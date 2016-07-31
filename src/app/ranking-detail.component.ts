import { Component } from '@angular/core';
import { Ranking } from './ranking';
import { User } from './user';
import { RankingService } from './ranking.service';
import { Router, ActivatedRoute }       from '@angular/router';
import { OrderByPoints } from './orderByPoints.pipe';

@Component({
  selector: 'ranking-detail',
  pipes : [OrderByPoints],
  template: `
		<div *ngIf="ranking">
      <img src="{{ranking.picture}}" width="100" alt="" />
			<h3>Détail du ranking {{ranking.name}}</h3>
      <div *ngFor="let member of (ranking.members | orderByPoints)">
         <img src="https://robohash.org/{{member.name}}?set=set3" width="50" alt="" /> - {{member.name}} : {{member.points}} <button (click)="addPoint(member)">+1</button>
      </div>
		</div>
  `,
  providers : [RankingService]
})

export class RankingDetailComponent {

  private sub: any;
	ranking: Ranking;
  	constructor(private route: ActivatedRoute, private rankingService: RankingService) {}

	getRanking(id: number) {
		console.log("PARAMS ID", id);
  		this.rankingService.getRanking(id).then( ranking => {
        console.log(ranking);
			this.ranking = ranking;
		});
	}

    addPoint(member:User) {
      member.points++;
    }
	ngOnInit() {
  	this.sub = this.route.params.subscribe( (params) => {
	      let id = +params['id']; // (+) converts string 'id' to a number
  		this.getRanking(id);
    });
  }
}
