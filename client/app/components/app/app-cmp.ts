import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'
import { HttpExpCmp } from '../http-exp/http-exp-cmp'
import { RouterHooksExpCmp } from '../router-hooks-exp/router-hooks-exp-cmp'
import { CmpInputOutputExpCmp } from '../cmp-input-output-exp/cmp-input-output-exp-cmp'
import { CmpLifeCycleExpCmp } from '../cmp-life-cycle-exp/cmp-life-cycle-exp-cmp'
import { FormsExpCmp } from '../forms-exp/forms-exp-cmp'
import { ChildRouterExpCmp } from '../child-router-exp/child-router-exp-cmp'
import { ServiceInjectionCmp } from '../service-injection/service-injection-cmp'
import { FormToolsCmp } from '../form-tools/form-tools-cmp'
import { FormObservableCmp } from '../form-observable/form-observable-cmp'
import { CmpFeaturesExpCmp } from '../cmp-features-exp/cmp-features-exp-cmp'
import { DecoratorsCmp } from '../decorators/decorators-cmp'
import { EventEmitterCmp } from '../event-emitter/event-emitter-cmp'
import { ReactiveBasicCmp } from '../reactive-basic/reactive-basic-cmp'
import { ReactiveExpCmp } from '../reactive-exp/reactive-exp-cmp'

@Component({
  selector: 'app',
  templateUrl: 'app/components/app/app-cmp.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/httpExp',
    as: 'HttpExp',
    component: HttpExpCmp
  },
  {
    path: '/routerHooksExp',
    as: 'RouterHooksExp',
    component: RouterHooksExpCmp
  },
  {
    path: '/cmpInputOutputExp',
    as: 'CmpInputOutputExp',
    component: CmpInputOutputExpCmp
  },
  {
    path: '/cmpLifeCycleExp',
    as: 'CmpLifeCycleExp',
    component: CmpLifeCycleExpCmp
  },
  {
    path: '/formsExp',
    as: 'FormsExp',
    component: FormsExpCmp
  },
  {
    path: '/childRouterExp/...',
    as: 'ChildRouterExp',
    component: ChildRouterExpCmp
  },
  {
    path: '/serviceInjection',
    as: 'ServiceInjection',
    component: ServiceInjectionCmp
  },
  {
    path: '/formTools',
    as: 'FormTools',
    component: FormToolsCmp
  },
  {
    path: '/formObservable',
    as: 'FormObservable',
    component: FormObservableCmp
  },
  {
    path: '/cmpFeaturesExp',
    as: 'CmpFeaturesExp',
    component: CmpFeaturesExpCmp
  },
  {
    path: '/decorators',
    as: 'Decorators',
    component: DecoratorsCmp
  },
  {
    path: '/eventEmitter',
    as: 'EventEmitter',
    component: EventEmitterCmp
  },
  {
    path: '/reactiveBasic',
    as: 'ReactiveBasic',
    component: ReactiveBasicCmp
  },
  {
    path: '/reactiveExp',
    as: 'ReactiveExp',
    component: ReactiveExpCmp
  }
])
export class AppCmp { }
