// @reactivex/rxjs

import { Component, EventEmitter } from 'angular2/angular2'
import * as Rx from '@reactivex/rxjs'

@Component({
  selector: 'reactive-cmp',
  templateUrl: 'app/components/reactive/reactive-cmp.html'
})
export class ReactiveCmp {

  clickEventEmitter = new EventEmitter();
  constructor () {
    // Video 02
    var clickStream = this.clickEventEmitter
    // clickStream.subscribe((val) => console.log(val))

    clickStream.forEach((val) => {
      console.log(val)
      return val
    })
  }

  clickEvent () {
    this.clickEventEmitter.next('clix')
  }

  // Video 01
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

  // Video 01
  reactive () {
    var source = Rx.Observable.interval(400).take(9)
      .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i])

    var result = source
      .map(x => parseInt(x))
      .filter(x => !isNaN(x))
      .reduce((x, y) => x + y)

    result.subscribe(x => console.log(x))
  }
}