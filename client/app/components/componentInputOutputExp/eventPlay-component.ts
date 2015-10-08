import { Component, View, EventEmitter } from 'angular2/angular2'
import { ObservableWrapper } from 'angular2/src/core/facade/async'

@Component({
  selector: 'event-play',
  inputs: [
    // local  parent
    'titleIn: title',
    'dataIn: data'
  ],
  outputs: [
    // local           parent (lowercase only!)
    'playEventEmitter: playevent'
  ],
  host: {
    '(mouseover)': 'reactOnHostMouseover()'
  }
})
@View({
  templateUrl: 'app/components/componentInputOutputExp/eventPlay-component.html'
})
export class EventPlayComponent {
  constructor () {
    this.titleIn = ''
    this.playEventEmitter = new EventEmitter()
  }

  clickButton () {
    console.log('child: button clicked')
    this.playEventEmitter.next()
  }

  sayDataFromParent () {
    console.log('child: I got this from parent through input: ', this.dataIn)
  }

  reactOnHostMouseover () {
    console.log('hovering over host')
  }
}
