import { Component, View } from 'angular2/angular2'

@Component({
  selector: 'cmp-life-cycle'
})
@View({
  template: '<h3>Component Life Cycle Experiment</h3>'
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