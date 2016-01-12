import { Component } from 'angular2/core'
import { SomeInput } from './view-child-exp/some-input'
import { QueryExp } from './queryExp/queryExp'

@Component({
  directives: [SomeInput, QueryExp],
  selector: 'cmp-features',
  template: `
    <h3>Component Features</h3>
    <some-input mytext="mysterious" wadda="hej"></some-input>
    <br>
    <query-exp></query-exp>
  `
})
export class CmpFeaturesExpCmp {
  constructor () {
    console.log('yep')
  }
}
