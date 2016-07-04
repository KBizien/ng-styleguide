import { Component, Input } from '@angular/core';
import { Ranking } from './ranking';

@Component({
  selector: 'ranking-item',
  template: `
	<div class="rankingContent">
		<div>
			<img width="50" src="{{ranking.picture}}" alt="" />
		</div>
		<div>{{ranking.id}} - {{ranking.name}}</div>
	</div>
  `,
  styles : [`
	.rankingContent {
		display: inline-block;
		text-align: center;
		border: 1px solid black;
		width: 200px;
		padding: 5px;
		margin: 5px;
	}
  `]
})

export class RankingItemComponent {
	@Input() ranking: Ranking;
}
