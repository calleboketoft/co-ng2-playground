import { Inject } from 'angular2/angular2'
import { Http } from 'angular2/http'

export class SomeService {
  constructor (@Inject(Http) http:Http) {
    console.log('SomeService started, why is this not a singleton?')
    this.myValue = 'Calle'
  }
}
