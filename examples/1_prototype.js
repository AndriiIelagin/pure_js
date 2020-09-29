const person = new Object({
  name: 'Andrew',
  age: 25,
  greet: function() {
    console.log('Greet')
  }
})

Object.prototype.sayHello = function() {
  console.log('Hello')
}
const ira = Object.create(person)
ira.name = 'Iryna'


const str = new String('I am string')