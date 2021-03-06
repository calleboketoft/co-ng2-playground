// @reactivex/rxjs

import { Component } from 'angular2/core'
import * as Rx from 'rxjs'

@Component({
  selector: 'reactive-basic-cmp',
  templateUrl: 'app/components/reactiveBasic/reactiveBasic-cmp.html'
})
export class ReactiveBasicCmp {

  // placeholder for the observer
  observer

  setUp () {
    // Create a new Observable
    var source = Rx.Observable.create((observer) => {
      // Attach the observer to the class
      this.observer = observer
      // Return complete function of observable
      return () => {
        console.log('completing: ' + this.i)
      }
    })

    source.subscribe((x) => {
      console.log(x)
    })

    console.log('Set up done')
  }

  i = 0;
  sendToObserver () {
    this.observer.next('next: ' + this.i)
    this.i++
  }

  finalize () {
    this.observer.complete()
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