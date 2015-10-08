import { Component, View } from 'angular2/angular2'
import { Inject } from 'angular2/core'
import { Http } from 'angular2/http'

@Component({
  selector: 'http-exp'
})
@View({
  template: '<h3>Http Experiment</h3>'
})
export class HttpExpComponent {
  constructor (@Inject(Http) http: Http) { // Why the manual @Inject(Http) here?
    http.get('app/components/httpExp/somedata.json')
      .subscribe((res:any) => {
        console.log(res)
      })
  }
}
