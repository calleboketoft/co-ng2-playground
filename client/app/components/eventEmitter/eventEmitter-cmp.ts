import { Component, EventEmitter } from 'angular2/core'

@Component({
  selector: 'event-emitter-cmp',
  templateUrl: 'app/components/eventEmitter/eventEmitter-cmp.html'
})
export class EventEmitterCmp {

  myEventEmitter = new EventEmitter()

  eventCounter: number = 1

  constructor () {
    this.myEventEmitter.forEach((values) => {
      console.log('Values: ' + values)
    })
  }

  emitEvent () {
    this.myEventEmitter.next('click nr: ' + this.eventCounter)
    this.eventCounter++
  }
}
