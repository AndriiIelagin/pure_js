const people = [
  {id: 1, name: 'Andrew', age: 35, budget: 25000},
  {id: 2, name: 'Iryna', age: 31, budget: 25000},
  {id: 3, name: 'Aleksandr', age: 55, budget: 15000},
  {id: 4, name: 'Lydmila', age: 55, budget: 15000},
]

// for(let person of people) {
//   console.log(person)
// }

// Reduce
const amount = people.reduce((total, p) => total + p.budget, 0)
console.log('amount', amount)