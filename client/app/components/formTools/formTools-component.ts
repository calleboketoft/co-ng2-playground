import { Component } from 'angular2/core'
import { FORM_DIRECTIVES } from 'angular2/common'
import { CoTagsComponent } from './coTags/coTags-component'

@Component({
  directives: [CoTagsComponent, FORM_DIRECTIVES],
  selector: 'form-tools',
  templateUrl: 'app/components/formTools/formTools-component.html'
})
export class FormToolsComponent {
  constructor () {
    this.tags = ['biff', 'buff', 'boff']
  }
}
