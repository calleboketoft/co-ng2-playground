import {
  Component,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Control
} from 'angular2/angular2'

@Component({
  selector: 'form-observable',
  templateUrl: 'app/components/formObservable/formObservable-component.html',
  directives: [FORM_DIRECTIVES]
})
export class FormObservableComponent {

  form: ControlGroup

  name: Control = new Control('')

  constructor (formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'name': this.name
    })
  }

  onInit () {
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
