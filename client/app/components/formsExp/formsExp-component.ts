import { Component } from 'angular2/core'
import { ModelDrivenFormComponent } from './modelDrivenForm/modelDrivenForm-component'

@Component({
  selector: 'forms-exp',
  templateUrl: 'app/components/formsExp/formsExp-component.html',
  directives: [
    ModelDrivenFormComponent
  ]
})
export class FormsExpComponent { }
