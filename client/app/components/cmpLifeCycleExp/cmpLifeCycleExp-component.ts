import { Component, OnInit, OnDestroy } from 'angular2/core'

@Component({
  selector: 'cmp-life-cycle',
  template: '<h3>Component Life Cycle</h3>'
})
export class CmpLifeCycleExpComponent implements OnInit, OnDestroy {
  constructor () {
    console.log('life cycle')
  }

  ngOnInit () {
    console.log('on init')
  }

  ngOnDestroy () {
    console.log('on destroy')
  }
}
