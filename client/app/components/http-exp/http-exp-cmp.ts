import { Component } from 'angular2/core'
import { Http } from 'angular2/http'

@Component({
  selector: 'http-exp',
  template: '<h3>Http</h3>'
})
export class HttpExpCmp {
  constructor (http: Http) { // Why the manual @Inject(Http) here?
    http.get('app/components/http-exp/somedata.json')
      .subscribe((res:any) => {
        console.log(res)
      })
  }
}
