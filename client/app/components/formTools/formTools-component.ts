import { Component, FORM_DIRECTIVES } from 'angular2/angular2'
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
