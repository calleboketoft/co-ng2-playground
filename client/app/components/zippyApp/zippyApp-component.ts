import { Component, NgFor } from 'angular2/core'
import { ZippyComponent } from './zippy-component'

@Component({
  selector: 'zippy-app',
  templateUrl: 'app/components/zippyApp/zippyApp-component.html',
  directives: [ZippyComponent, NgFor]
})
export class ZippyAppComponent {
  constructor () {
    this.logs = []
  }

  pushLog(log) { this.logs.push(log) }
}
