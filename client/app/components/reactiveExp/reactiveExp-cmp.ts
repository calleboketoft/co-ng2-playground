import { Component, EventEmitter } from 'angular2/angular2'
import * as Rx from '@reactivex/rxjs'

@Component({
  selector: 'reactive-exp',
  templateUrl: 'app/components/reactiveExp/reactiveExp-cmp.html'
})
export class ReactiveExpCmp {
  observer
  constructor () {
    var source = Rx.Observable.create((observer) => {
      this.observer = observer
    })

    source.subscribe((x) => {
      console.log(x)
    })
  }

  clickHandler () {
    this.observer.next('clicked')
  }
}
