import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'
import esmSingleton from './esmSingleton'

@Injectable()
export class SomeService {
  constructor (http:Http) {
    console.log('SomeService started, note that this is not a singleton')
    console.log(http)
    this.myValue = 'Calle'
    if (esmSingleton.singletonDataHere) {
      console.log('esmSingleton has already been initialized: ', esmSingleton.singletonDataHere)
    } else {
      console.log('esmSingleton has NOT been initialized, now being inited')
      esmSingleton.singletonDataHere = 'yep'
    }
  }
}
