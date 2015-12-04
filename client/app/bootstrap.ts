import 'reflect-metadata'
import 'zone.js'
import { bind, bootstrap } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http'

import { RecursiveService } from './components/serviceInjection/RecursiveService'

import { AppComponent } from './components/app/app-component'

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  RecursiveService,
  bind(LocationStrategy).toClass(HashLocationStrategy)
])
