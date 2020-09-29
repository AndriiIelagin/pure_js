const obj = {
  name: 'Andrew',
  age: 35,
  job: 'Fullstack'
}

const entries = [
  ['name', 'Andrew'],
  ['age', 35],
  ['job', 'Fullstack'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)
// console.log(map.get('job'))

map.set(obj, 'Value of an object')
// map.delete('age')
// console.log(map.has('age'))
// console.log(map.size)
// map.clear() 

// ======================================

// for(let [key, value] of map.entries()) {
//   console.log(key, value)
// }

// for (let value of map.values()) {
//   console.log(value)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((value, key, m) => console.log(key, value))

// ======================================

// const array = [...map]
// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj)

// ====================================== EXAMPLES

const users = [
  {name: 'Andrew'},
  {name: 'Iryna'},
  {name: 'Alexandr'},
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date() + 1000 * 60))
  .set(users[2], new Date(new Date() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[1]))