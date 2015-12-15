// NOTE: Template driven forms are NOT preferred

import { Component, FORM_DIRECTIVES } from 'angular2/core'

@Component({
  selector: 'template-driven-form',
  templateUrl: 'app/components/formsExp/templateDrivenForm/templateDrivenForm-component.html',
  directives: [FORM_DIRECTIVES]
})
export class TemplateDrivenFormComponent {
  onSubmit(value:any) {
    console.log(value)
  }
}
