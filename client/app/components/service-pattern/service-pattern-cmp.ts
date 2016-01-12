import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router'
import {BobCmp} from './kids/bob-cmp'
import {AliceCmp} from './kids/alice-cmp'
import {AppApiService} from './services/app-api-service'

@Component({
  selector: 'service-pattern',
  template: `
    <h3>Service Pattern</h3>
    <a [routerLink]="['./Bob']">Bob</a> | <a [routerLink]="['./Alice']">Alice</a>
    <br><br>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [AppApiService]  // registering the provider here makes it instantiate with this
                              // component and its children will get the same instance upon
                              // dependency injection
})
@RouteConfig([
  {path: '/bob',    as: 'Bob',    component: BobCmp,    useAsDefault: true},
  {path: '/alice',  as: 'Alice',  component: AliceCmp}
])
export class ServicePatternCmp {
  private appApiService:AppApiService // Instantiate the appApiService
}
