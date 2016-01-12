import {Injectable} from 'angular2/core'
import {SuperRestClient} from './super-rest-client'

@Injectable()
export class AppApiService {
  // If I need a couple of different instances of the service, with different features
  // simply do like this:
  public superRestClient: SuperRestClient = new SuperRestClient('wowowaoosowoasoas');
  public superRestClient2: SuperRestClient = new SuperRestClient('I am a twinz!');
}
