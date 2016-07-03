import { Component } from '@angular/core';
import { BreweryService } from './brewery.service';
import { Brewery } from './brewery';

@Component({
  selector: 'breweryList',
  template: `
				<h3>List of all breweries</h3>
				<ul>
					<li></li>
				</ul>
  `,
  providers : [BreweryService]
})

export class BreweryListComponent {
	breweries: Brewery[];

	constructor(private breweryService: BreweryService) { }

	getBreweries() {
		this.breweryService.getBreweries().then( breweries => this.breweries = breweries);
	}
	ngOnInit() {
		this.getBreweries();
	}
}
