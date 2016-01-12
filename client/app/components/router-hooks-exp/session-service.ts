import sessionData from './session-data'
export class SessionService {
  getUser () {
    return sessionData.user
  }
  setUser (newUser) {
    sessionData.user = newUser
  }
}