import { Component } from 'angular2/core'
import { ModelDrivenFormCmp } from './model-driven-form/model-driven-form-cmp'

@Component({
  selector: 'forms-exp',
  templateUrl: 'app/components/forms-exp/forms-exp-cmp.html',
  directives: [
    ModelDrivenFormCmp
  ]
})
export class FormsExpCmp { }
