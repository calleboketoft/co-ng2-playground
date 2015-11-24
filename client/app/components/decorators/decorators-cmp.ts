import { Component } from 'angular2/angular2'

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

function classDecorator(target: any) {

  // save a reference to the original constructor
  var original = target

  // a utility function to generate instances of a class
  function construct (constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args)
    }
    c.prototype = constructor.prototype
    return new c()
  }

  // the new constructor behaviour
  var f : any = function (...args) {
    console.log('New: ' + original.name);
    return construct(original, args)
  }

  // copy prototype so intanceof operator still works
  f.prototype = original.prototype

  // return new constructor (will override original)
  return f
}

@Component({
  selector: 'decorators-cmp',
  templateUrl: 'app/components/decorators/decorators-cmp.html'
})
@classDecorator
export class DecoratorsCmp {

  @propertyDecorator
  public decorateProp

  constructor () {
    console.log('initializing')
  }

  @methodDecorator
  decorateMe (inputVal) {
    console.log(inputVal)
  }

  touchPropertyDecorator (newVal) {
    this.decorateProp = newVal
  }
}


