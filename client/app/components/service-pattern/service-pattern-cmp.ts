import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router'
import {BobCmp} from './kids/bob-cmp'
import {AliceCmp} from './kids/alice-cmp'

@Component({
  selector: 'service-pattern',
  template: `
    <h3>Service Pattern</h3>
    <a [routerLink]="['./Bob']">Bob</a> | <a [routerLink]="['./Alice']">Alice</a>
    <br><br>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/bob',    as: 'Bob',    component: BobCmp, useAsDefault: true},
  {path: '/alice',  as: 'Alice',  component: AliceCmp}
])
export class ServicePatternCmp {
  constructor (private router: Router) {}

  go (place) {
    switch(place) {
      case 'bob':
        console.log('go bob!')
        break
      case 'alice':
        console.log('go alice!')
        break
      default:
        break
    }
  }
}
