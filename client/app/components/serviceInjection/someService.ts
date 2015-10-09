import { Inject } from 'angular2/angular2'
import { Http } from 'angular2/http'
import esmSingleton from './esmSingleton'

export class SomeService {
  constructor (@Inject(Http) http:Http) {
    console.log('SomeService started, note that this is not a singleton')
    this.myValue = 'Calle'
    if (esmSingleton.singletonDataHere) {
      console.log('esmSingleton has already been initialized: ', esmSingleton.singletonDataHere)
    } else {
      console.log('esmSingleton has NOT been initialized, now being inited')
      esmSingleton.singletonDataHere = 'yep'
    }
  }
}
