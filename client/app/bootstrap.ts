import { bootstrap } from 'angular2/platform/browser'
import { bind } from 'angular2/core'
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http'

import { RecursiveService } from './components/service-injection/recursive-service'

import { AppCmp } from './components/app/app-cmp'

bootstrap(AppCmp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  RecursiveService,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]).catch(err => console.error(err))
