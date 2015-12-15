import { Component } from 'angular2/core'

@Component({
  selector: 'cmp-life-cycle',
  template: '<h3>Component Life Cycle</h3>'
})
export class CmpLifeCycleExpComponent {
  constructor () {
    console.log('life cycle')
  }

  onInit () {
    console.log('on init')
  }

  onDestroy () {
    console.log('on destroy')
  }
}