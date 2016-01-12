import {Component} from 'angular2/core'
import {AppApiService} from '../services/app-api-service'

@Component({
  selector: 'bob',
  template: 'bob'
})
export class BobCmp {
  constructor (appApiService: AppApiService) {  // Since the appApiService is provided in the
                                                // parent of this (service-pattern-cmp.ts)
                                                // it will not be instantiated here as well
    console.log(appApiService.superRestClient.getMyData())
    console.log(appApiService.superRestClient2.getMyData())
  }
}
