import { Component } from 'angular2/angular2'
import { SomeInput } from './someInput'

@Component({
  selector: 'cmp-features',
  template: `
    <h3>Component Features</h3>
    <some-input mytext="mysterious" wadda="hej"></some-input>
  `,
  directives: [SomeInput]
})
export class CmpFeaturesExpComponent {
  constructor () {
    console.log('yep')
  }
}