import 'reflect-metadata'
import 'zone.js'
import { bind, bootstrap } from 'angular2/angular2';
import { routerBindings, LocationStrategy, HashLocationStrategy } from 'angular2/router'

import { AppComponent } from 'app/components/app-component'

bootstrap(AppComponent, [
  routerBindings(AppComponent),
  bind(LocationStrategy).toClass(HashLocationStrategy)
])