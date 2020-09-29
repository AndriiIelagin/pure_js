// Позволяет избежать утечек данных в JS

let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null
// console.log(arr)

// const map = new WeakMap([
//   [obj, 'obj data']
// ])

// obj = null

// console.log(map.has(obj))
// console.log(map)

// ============================= EXAMPLES

const cache = new WeakMap()

function cacheUser(user) {
  if(!cache.has(user)) {
    cache.set(user, Date.now())
  }

  return cache.get(user)
}

let andrew = {name: 'Andrew'}
let iryna = {name: 'Iryna'}
let victor = {name: 'Victor'}

cacheUser(andrew)
cacheUser(iryna)
cacheUser(victor)

victor = null


console.log(cache.has(andrew))
console.log(cache.has(iryna))
console.log(cache.has(victor))