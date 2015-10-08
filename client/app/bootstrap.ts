import 'reflect-metadata'
import 'zone.js'
import { bind, bootstrap } from 'angular2/angular2';
import { routerBindings, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { HTTP_BINDINGS } from 'angular2/http'

import { AppComponent } from 'app/components/app/app-component'

bootstrap(AppComponent, [
  HTTP_BINDINGS,
  routerBindings(AppComponent),
  bind(LocationStrategy).toClass(HashLocationStrategy)
])