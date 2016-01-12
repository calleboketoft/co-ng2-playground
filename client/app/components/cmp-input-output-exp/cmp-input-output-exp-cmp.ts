import { Component } from 'angular2/core'
import { EventPlayCmp } from './event-play-cmp'

@Component({
  selector: 'input-output',
  templateUrl: 'app/components/cmp-input-output-exp/cmp-input-output-exp-cmp.html',
  directives: [EventPlayCmp]
})
export class CmpInputOutputExpCmp {

  constructor() {
    // Send this data to child
    this.dataForChild = {
      'hereis': 'data from parent to child'
    }
  }

  // Child event triggers this one
  parentReaction (text) {
    console.log('parent: triggered by event from child')
  }
}