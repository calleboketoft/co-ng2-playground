// @reactivex/rxjs

import { Component } from 'angular2/angular2'
import Rx from '@reactivex/rxjs'

@Component({
  selector: 'reactive-cmp',
  templateUrl: 'app/components/reactive/reactive-cmp.html'
})
export class ReactiveCmp {
  nonReactive () {
    var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13']
    var result = source
    console.log(result)

    var resultFiltered = source
      .map(x => parseInt(x))
      .filter(x => !isNaN(x))
      .reduce((x, y) => x + y)

    console.log(resultFiltered)
  }

  reactive () {
    Rx.Observable.of('hello world')
      .subscribe((x) => { console.log(x) })
  }
}