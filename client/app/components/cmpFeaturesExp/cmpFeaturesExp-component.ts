import { Component } from 'angular2/core'
import { SomeInput } from './viewChildExp/someInput'
import { QueryExp } from './queryExp/queryExp'

@Component({
  selector: 'cmp-features',
  template: `
    <h3>Component Features</h3>
    <some-input mytext="mysterious" wadda="hej"></some-input>
    <br>
    <query-exp></query-exp>
  `,
  directives: [SomeInput, QueryExp]
})
export class CmpFeaturesExpComponent {
  constructor () {
    console.log('yep')
  }
}
