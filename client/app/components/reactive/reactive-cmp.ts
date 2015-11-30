// @reactivex/rxjs

import { Component } from 'angular2/angular2'

@Component({
  selector: 'reactive-cmp',
  templateUrl: 'app/components/reactive/reactive-cmp.html'
})
export class ReactiveCmp {
  constructor () {
    console.log('starting up')
  }
}