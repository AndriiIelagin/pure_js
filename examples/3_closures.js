// замыкания - функция внутри другой функции

// function createCalc(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// =====

// const calc = createCalc(43) // returns function
// calc()

// function createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addFive = createIncrementor(5)
// console.log(addFive(5))
// console.log(addFive(10))

// =====

// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))
// console.log(comUrl('facebook'))

// ===== EXAMPLE

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind(context, fn) {
  return function(...args) {
    return fn.apply(context, args)
  }
}

const person1 = {name: 'Andrew', age: 36, job: 'Software Engineer'}
const person2 = {name: 'Iryna', age: 32, job: 'Designer'}

bind(person1, logPerson)()
bind(person2, logPerson)()