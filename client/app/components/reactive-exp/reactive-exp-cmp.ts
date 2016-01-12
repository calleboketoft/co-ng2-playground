import { Component } from 'angular2/core'
import * as Rx from 'rxjs'

@Component({
  selector: 'reactive-exp',
  templateUrl: 'app/components/reactive-exp/reactive-exp-cmp.html'
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
