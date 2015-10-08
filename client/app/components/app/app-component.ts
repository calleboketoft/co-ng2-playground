import { Component, View } from 'angular2/angular2'
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'
import { HttpExpComponent } from '../httpExp/httpExp-component'

@Component({
  selector: 'app'
})
@View({
  template: `
    <a [router-link]="['/HttpExp']">Http</a><br>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/httpExp',
    as: 'HttpExp',
    component: HttpExpComponent
  }
])
export class AppComponent { }
