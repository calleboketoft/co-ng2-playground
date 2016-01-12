import {
  Component
} from 'angular2/core'

import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control
} from 'angular2/common'

@Component({
  selector: 'form-observable',
  templateUrl: 'app/components/form-observable/form-observable-cmp.html',
  directives: [FORM_DIRECTIVES]
})
export class FormObservableCmp {

  form: ControlGroup

  name: Control = new Control('')

  constructor (formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'name': this.name
    })
  }

  ngOnInit () {
    this.name.valueChanges
      .debounceTime(200)
      .subscribe(something => {
        console.log(something)
      })
  }

  onSubmit () {
    console.log('nothing here')
  }
}
