
function hello() {
  console.log('Hello', this)
}

const person = {
  name: 'Andrew',
  age: 35,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}

const ira = {
  name: 'Iryna',
  age: 32
}

// метод bind возвращает функцию
person.logInfo.bind(ira, 'Designer', '3-999-1234-654-546')()
// call вызывает функцию сразу
person.logInfo.call(ira, 'Designer', '3-999-1234-654-546')
// метод apply сразу вызывает функциюб аргументы передаются в виде массива
person.logInfo.apply(ira, ['Designer', '3-999-1234-654-546'])

// ================
const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//   return arr.map(i => i * n)
// }

Array.prototype.multBy = function(n) {
  return this.map(i => i * n)
}

console.log(array.multBy(2))
