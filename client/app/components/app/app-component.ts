import { Component, View } from 'angular2/angular2'
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'
import { HttpExpComponent } from '../httpExp/httpExp-component'
import { RouterHooksExpComponent } from '../routerHooksExp/routerHooksExp-component'

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/components/app/app-component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/httpExp',
    as: 'HttpExp',
    component: HttpExpComponent
  },
  {
    path: '/routerHooksExp',
    as: 'RouterHooksExp',
    component: RouterHooksExpComponent
  }
])
export class AppComponent { }
