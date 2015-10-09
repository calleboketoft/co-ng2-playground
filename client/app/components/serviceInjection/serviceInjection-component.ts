import { Component, Inject } from 'angular2/angular2'
import { SomeService } from 'app/components/serviceInjection/SomeService'

@Component({
  selector: 'serviceDi',
  bindings: [SomeService],
  template: '<h3>Service DI</h3>'
})
export class ServiceInjectionComponent {
  constructor (@Inject(SomeService) someService: SomeService) {
    console.log ('Service Dependency Injection Component Init')
    console.log('Using SomeService: ', someService.myValue)
  }
}
