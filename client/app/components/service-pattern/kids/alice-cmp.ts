import {Component} from 'angular2/core'
import {AppApiService} from '../services/app-api-service'

@Component({
  selector: 'alice',
  template: 'alice'
})
export class AliceCmp {
  constructor (appApiService: AppApiService) {
    console.log(appApiService.superRestClient.getMyData())
    console.log(appApiService.superRestClient2.getMyData())
  }
}
