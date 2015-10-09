import sessionData from './sessionData'
export class SessionService {
  getUser () {
    return sessionData.user
  }
  setUser (newUser) {
    sessionData.user = newUser
  }
}