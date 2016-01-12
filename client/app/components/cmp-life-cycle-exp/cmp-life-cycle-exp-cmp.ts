import { Component, OnInit, OnDestroy } from 'angular2/core'

@Component({
  selector: 'cmp-life-cycle',
  template: '<h3>Component Life Cycle</h3>'
})
export class CmpLifeCycleExpCmp implements OnInit, OnDestroy {
  constructor () {
    console.log('life cycle')
  }

  public ngOnInit () {
    console.log('on init')
  }

  public ngOnDestroy () {
    console.log('on destroy')
  }
}
