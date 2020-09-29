const users = [
  {name: 'Andrew'},
  {name: 'Iryna'},
  {name: 'Andrew'},
]

const ws = new WeakSet()

ws.add(users[0]).add(users[1]).add(users[2])

users.splice(2,1)

console.log(ws.has(users[0]))
console.log(ws.has(users[1]))
console.log(ws.has(users[2]))