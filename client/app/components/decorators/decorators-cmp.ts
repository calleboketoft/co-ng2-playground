import { Component } from 'angular2/angular2'

function classDecorator (target) {
  target.whois = 'Prepared'

}
function classFactoryDecorator (itemName) {
  return function (target) {
    target.itemName = itemName
  }
}
function methodDecorator (target, key, descriptor) {

  // preserve the original method
  let originalMethod = descriptor.value
  descriptor.value = function (...args) {

    // Do the modding here
    console.log('Decorator caught: ' + args...)
    console.log(this) // this points to the class whith the method

    // apply the original method
    let result = originalMethod.apply (this, args)
    return result
  }
  return descriptor
}

function propertyDecorator (target, key) {
  // property value
  var _val = this[key]

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`)
    return _val
  }

  // property setter
  var setter = function (newVal) {
    console.log(`Set: ${key} => ${newVal}`)
    _val = newVal
  }

  // Delete property.
  // (delete operator throws in strict mode if the property is an own non-configurable property (returns false in non-strict))
  if (delete this[key]) {

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

@Component({
  selector: 'decorators-cmp',
  templateUrl: 'app/components/decorators/decorators-cmp.html'
})
@classDecorator
@classFactoryDecorator('Nisse')
export class DecoratorsCmp {

  @propertyDecorator
  public decorateProp

  constructor () {
    console.log('initializing')
  }
  getPreparedName () {
    console.log(DecoratorsCmp.whois)
  }
  getFactoryName () {
    console.log(DecoratorsCmp.itemName)
  }
  @methodDecorator
  decorateMe (inputVal) {
    console.log(inputVal)
  }

  touchPropertyDecorator (newVal) {
    this.decorateProp = newVal
  }
}


