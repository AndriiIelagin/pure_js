const people = [
  { id: 1, name: 'Andrew', age: 35 },
  { id: 2, name: 'Iryna', age: 31 },
  { id: 3, name: 'Max', age: 28 },
  { id: 4, name: 'Alex', age: 36 },
  { id: 5, name: 'Maria', age: 25 }
]

console.table(people)

// ========================

console.time('timer')
const res = []
for (let i = 0; i < 100000; i++) {
  res.push({id: i + 1})
}
console.timeEnd('timer')