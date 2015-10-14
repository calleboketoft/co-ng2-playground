import { Component } from 'angular2/angular2'
import { ROUTER_DIRECTIVES, RouteConfig, Router } from 'angular2/router'

import { DumdumComponent } from './dumdum/dumdum-component'
import { BabyComponent } from './baby/baby-component'

@Component({
  selector: 'child-router-exp',
  templateUrl: 'app/components/childRouterExp/childRouterExp-component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/dumdum',
    as: 'Dumdum',
    component: DumdumComponent
  },
  {
    path: '/baby',
    as: 'Baby',
    component: BabyComponent
  }
])
export class ChildRouterExpComponent {
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