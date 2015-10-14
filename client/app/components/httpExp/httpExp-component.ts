import { Component } from 'angular2/angular2'
import { Http } from 'angular2/http'

@Component({
  selector: 'http-exp',
  template: '<h3>Http Experiment</h3>'
})
export class HttpExpComponent {
  constructor (http: Http) { // Why the manual @Inject(Http) here?
    http.get('app/components/httpExp/somedata.json')
      .subscribe((res:any) => {
        console.log(res)
      })
  }
}
