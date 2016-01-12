import { Component } from 'angular2/core'

@Component({
  selector: 'child-of-some-input',
  template: '<p style="color: blue">Im the child</p>'
})
export class ChildOfSomeInput {
  constructor () {
    console.log('child instantiated')
  }

  lasseSays () {
    console.log('hello')
  }
}
