import { Component, Query, QueryList } from 'angular2/core'
import { CORE_DIRECTIVES } from 'angular2/common'

// https://angular.io/docs/ts/latest/api/core/Query-var.html

@Component({
  selector: 'pane',
  inputs: ['title']
})
class Pane {
  title:string
}

@Component({
  selector: 'tabs',
  directives: [CORE_DIRECTIVES],
  template: `
    <ul>
      <li *ngFor="#pane of panes">{{pane.title}}</li>
    </ul>
    <content></content>
  `
})
class Tabs {
  panes: QueryList<Pane>
  constructor(@Query(Pane) panes:QueryList<Pane>) {
    this.panes = panes
  }
}

// The main class

@Component({
  selector: 'query-exp',
  directives: [Tabs],
  template: `
    <h3>query exp</h3>
    <tabs></tabs>
  `
})
export class QueryExp {
  constructor () {
    console.log('testing')
  }
}