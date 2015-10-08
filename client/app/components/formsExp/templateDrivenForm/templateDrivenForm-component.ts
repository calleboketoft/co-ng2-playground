// NOTE: Template driven forms are NOT preferred

import { Component, View, FORM_DIRECTIVES } from 'angular2/angular2'

@Component({
  selector: 'template-driven-form'
})
@View({
  templateUrl: 'app/components/formsExp/templateDrivenForm/templateDrivenForm-component.html',
  directives: [FORM_DIRECTIVES]
})
export class TemplateDrivenFormComponent {
  onSubmit(value:any) {
    console.log(value)
  }
}
