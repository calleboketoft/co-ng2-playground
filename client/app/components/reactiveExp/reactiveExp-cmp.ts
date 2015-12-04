import { Component } from 'angular2/angular2'
import * as Rx from '@reactivex/rxjs'

@Component({
  selector: 'reactive-exp',
  templateUrl: 'app/components/reactiveExp/reactiveExp-cmp.html'
})
export class ReactiveExpCmp {
  observer
  constructor () {
    var clickStream = Rx.Observable.create((observer) => {
      this.observer = observer
    })

    clickStream.subscribe((x) => {
      console.log(x)
    })

    var doubleClickStream = clickStream
      .buffer(() => clickStream.throttle(250))
      .map(arr => arr.length)
      .filter(len => len === 2)

    doubleClickStream.subscribe((x) => {
      console.log('double click!')
    })
  }

  clickHandler () {
    this.observer.next('click')
  }
}