import { Component } from 'angular2/angular2'
import { EventPlayComponent } from './eventPlay-component'

@Component({
  selector: 'input-output',
  templateUrl: 'app/components/cmpInputOutputExp/cmpInputOutputExp-component.html',
  directives: [EventPlayComponent]
})
export class CmpInputOutputExpComponent {

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