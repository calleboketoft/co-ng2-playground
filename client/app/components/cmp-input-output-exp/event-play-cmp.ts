import { Component, EventEmitter } from 'angular2/core'

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
  },
  templateUrl: 'app/components/cmp-input-output-exp/event-play-cmp.html'
})
export class EventPlayCmp {
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
