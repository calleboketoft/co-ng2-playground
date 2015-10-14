import { Component, EventEmitter } from 'angular2/angular2'
import { ObservableWrapper } from 'angular2/src/core/facade/async'

@Component({
  selector: 'zippy',
  inputs: ['title'],
  outputs: [
    'openHandler: open',
    'closeHandler: close'
  ],
  templateUrl: 'app/components/zippyApp/zippy-component.html'
})
export class ZippyComponent {
  constructor () {
    this.visible = true
    this.title = ''
    this.openHandler = new EventEmitter()
    this.closeHandler = new EventEmitter()
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      ObservableWrapper.callNext(this.openHandler, null)
    } else {
      ObservableWrapper.callNext(this.closeHandler, null)
    }
  }
}