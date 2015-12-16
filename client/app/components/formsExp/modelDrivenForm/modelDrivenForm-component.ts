import {
  Component,
  Inject,
  OnInit
} from 'angular2/core'

import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control,
  Validators
} from 'angular2/common'

@Component({
  selector: 'model-driven-form',
  templateUrl: 'app/components/formsExp/modelDrivenForm/modelDrivenForm-component.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ModelDrivenFormComponent implements OnInit {

  form: ControlGroup

  // individually instantiated control
  name: Control = new Control('', Validators.required)

  constructor (formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'name': this.name,
      // simplified instatiation of control
      'password': ['', Validators.compose([Validators.required, customValidator])]
    })

    function customValidator (control) {
      // text should begin with 123
      if (!control.value.match(/^123/)){
        return {invalidSku: true};
      }
    }
  }

  ngOnInit () {
    // Observe all changes to form, reminds me of $watch
    this.form.valueChanges.subscribe((value) => {
      console.log("form changed to: ", value);
    })
  }

  logForm () {
    console.log(this.form)
    console.log(this.form.errors)
  }

  onSubmit () {
    console.log(this.form)
  }
}
