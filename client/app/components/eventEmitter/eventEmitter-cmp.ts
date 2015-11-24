import { Component } from 'angular2/angular2'

@Component({
  selector: 'event-emitter-cmp',
  templateUrl: 'app/components/eventEmitter/eventEmitter-cmp.html'
})
export class EventEmitterCmp {
  constructor () {
    console.log('init')
  }
}