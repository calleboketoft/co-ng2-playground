import { Component, Injector } from 'angular2/core'
import { CanActivate, CanDeactivate, OnActivate, OnDeactivate } from 'angular2/router'
import { SessionService } from './session-service'

function getSessionServiceInstance() {
  return Injector.resolveAndCreate([SessionService]).get(SessionService)
}

@Component({
  selector: 'router-hooks',
  template: '<h3>Router Hooks</h3>'
})
@CanActivate(() => {
  // DI in here: https://github.com/angular/angular/issues/4112
  // Hack to make it work for now:
  let sessionService = getSessionServiceInstance()
  return new Promise ((resolve, reject) => {
    if (sessionService.getUser()) {
      console.log('user data in place, login alright')
      resolve(sessionService.getUser())
    } else {
      console.log('user data not in place, fetch it first')
      if (confirm('user data fetching success?')) {
        sessionService.setUser('calle')
        resolve(sessionService.getUser())
      } else {
        reject('no!')
      }
    }
  })
})
export class RouterHooksExpCmp implements CanDeactivate, OnActivate, OnDeactivate {
  canDeactivate (next, prev) {
    return confirm('can deactivate?')
  }

  onActivate (next, prev) {
    console.log('onActivate triggered')
    console.log(next, prev)
  }

  onDeactivate (next, prev) {
    console.log('onDeactivate triggered')
    console.log(next, prev)
  }
}
