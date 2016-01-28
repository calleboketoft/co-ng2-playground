import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES, RouteConfig, Router } from 'angular2/router'

import { DumdumCmp } from './dumdum/dumdum-cmp'
import { BabyCmp } from './baby/baby-cmp'

@Component({
  selector: 'child-router-exp',
  templateUrl: 'app/components/child-router-exp/child-router-exp-cmp.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/dumdum',
    as: 'Dumdum',
    component: DumdumCmp
  },
  {
    path: '/baby',
    as: 'Baby',
    component: BabyCmp
  }
])
export class ChildRouterExpCmp {
  router
  constructor (router: Router) {
    this.router = router
  }

  goByNavigate (place) {
    if (place === 'dumdum') {
      // Routing relatively to current page
      this.router.navigate(['./Dumdum'])
    } else if (place === 'baby') {
      // Routing absolute component chain
      this.router.navigate(['/ChildRouterExp/Baby'])
    }
  }

  goByNavigateByUrl (place) {
    this.router.navigateByUrl(['childRouterExp/' + place])
  }
}