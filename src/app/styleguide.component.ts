import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'styleguide',
  template: `
				<h3>Styleguide Example</h3>
				<p>If you read this text, you can consider that the angular-router work well</p>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class StyleguideComponent { }
