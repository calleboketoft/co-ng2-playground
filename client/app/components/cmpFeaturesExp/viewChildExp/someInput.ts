import { Component, Input, ViewChild, ElementRef } from 'angular2/core'
import { ChildOfSomeInput } from './childOfSomeInput'

@Component({
  directives: [ChildOfSomeInput],
  inputs: ['wadda'],
  selector: 'some-input',
  template: `
    <p>{{mytext}}</p>
    <p>{{wadda}}</p>
    <child-of-some-input></child-of-some-input>
  `
})
export class SomeInput {

  @Input() public mytext: string

  @ViewChild(ChildOfSomeInput) public childOfSomeInput: ChildOfSomeInput

  // ElementRef is referencing this component's element!
  constructor (el: ElementRef) {
    console.log('some input init')
    console.log(el)
    // child of some input is not available yet!
  }

  // here you can reach the children of this component
  public afterViewInit () {
    this.childOfSomeInput.lasseSays()
    console.log(this.childOfSomeInput)
  }
}
