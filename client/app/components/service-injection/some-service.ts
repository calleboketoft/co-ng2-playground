import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http'
import esmSingleton from './esmSingleton'
import { RecursiveService } from './RecursiveService'

@Injectable()
export class SomeService {
  constructor (recursiveService:RecursiveService) {
    console.log('someService constructor')
    console.log(recursiveService.something)
    this.myValue = 'Calle'
    if (esmSingleton.singletonDataHere) {
      console.log('esmSingleton has already been initialized: ', esmSingleton.singletonDataHere)
    } else {
      console.log('esmSingleton has NOT been initialized, now being inited')
      esmSingleton.singletonDataHere = 'yep'
    }
  }
}
