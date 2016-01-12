import { Component } from 'angular2/core'
import { FORM_DIRECTIVES } from 'angular2/common'
import { CoTagsCmp } from './co-tags/co-tags-cmp'

@Component({
  directives: [CoTagsCmp, FORM_DIRECTIVES],
  selector: 'form-tools',
  templateUrl: 'app/components/form-tools/form-tools-cmp.html'
})
export class FormToolsCmp {
  constructor () {
    this.tags = ['biff', 'buff', 'boff']
  }
}
