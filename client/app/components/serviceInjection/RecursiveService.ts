import { Injectable } from 'angular2/core'
@Injectable()
export class RecursiveService {
  something = 'something'
  constructor () {
    console.log('RecursiveService.ts constructor')
  }
}