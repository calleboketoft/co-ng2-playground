import { Component } from 'angular2/angular2'
import { TemplateDrivenFormComponent } from './templateDrivenForm/templateDrivenForm-component'
import { ModelDrivenFormComponent } from './modelDrivenForm/modelDrivenForm-component'

@Component({
  selector: 'forms-exp',
  templateUrl: 'app/components/formsExp/formsExp-component.html',
  directives: [
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent
  ]
})
export class FormsExpComponent { }
