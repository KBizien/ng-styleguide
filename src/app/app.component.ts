import { Component } from '@angular/core';
import './css/styles.css';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives : [ROUTER_DIRECTIVES]
})

export class AppComponent { }
