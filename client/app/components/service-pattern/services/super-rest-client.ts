// This one is supposed to be used with any library
export class SuperRestClient {
  public myData: string

  constructor (someInputData) {
    console.log('I am instantiated, wao')
    this.myData = someInputData
  }

  getMyData () {
    return this.myData
  }
}
