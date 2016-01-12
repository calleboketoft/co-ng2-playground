import { Component } from 'angular2/core'
import { SomeService } from 'app/components/service-injection/some-service'

@Component({
  selector: 'serviceDi',
  bindings: [SomeService],
  template: '<h3>Service DI</h3>'
})
export class ServiceInjectionCmp {
  constructor (someService: SomeService) {
    console.log ('serviceInjection-component.ts constructor')
    console.log('someService.myValue: ', someService.myValue)
  }
}
