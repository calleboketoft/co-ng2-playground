import { Component, View } from 'angular2/angular2'
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'
import { HttpExpComponent } from '../httpExp/httpExp-component'
import { RouterHooksExpComponent } from '../routerHooksExp/routerHooksExp-component'
import { CmpInputOutputExpComponent } from '../cmpInputOutputExp/cmpInputOutputExp-component'
import { CmpLifeCycleExpComponent } from '../cmpLifeCycleExp/cmpLifeCycleExp-component'
import { FormsExpComponent } from '../formsExp/formsExp-component'
import { ZippyAppComponent } from '../zippyApp/zippyApp-component'
import { ChildRouterExpComponent } from '../childRouterExp/childRouterExp-component'
import { ServiceInjectionComponent } from '../serviceInjection/serviceInjection-component'

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
  },
  {
    path: '/cmpInputOutputExp',
    as: 'CmpInputOutputExp',
    component: CmpInputOutputExpComponent
  },
  {
    path: '/cmpLifeCycleExp',
    as: 'CmpLifeCycleExp',
    component: CmpLifeCycleExpComponent
  },
  {
    path: '/formsExp',
    as: 'FormsExp',
    component: FormsExpComponent
  },
  {
    path: '/zippyApp',
    as: 'ZippyApp',
    component: ZippyAppComponent
  },
  {
    path: '/childRouterExp/...',
    as: 'ChildRouterExp',
    component: ChildRouterExpComponent
  },
  {
    path: '/serviceInjection',
    as: 'ServiceInjection',
    component: ServiceInjectionComponent
  }
])
export class AppComponent { }
