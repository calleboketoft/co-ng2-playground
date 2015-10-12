import { Component } from 'angular2/angular2'
import { CoTagsComponent } from './coTags/coTags-component'

@Component({
  directives: [CoTagsComponent],
  selector: 'form-tools',
  templateUrl: 'app/components/formTools/formTools-component.html'
})
export class FormToolsComponent {
  constructor () {
    this.tags = ['biff', 'buff', 'boff']
  }
}
