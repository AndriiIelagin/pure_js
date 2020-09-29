function* strGenerator() {
  yield('H')
  yield('E')
  yield('L')
  yield('L')
  yield('O')
}

const str = strGenerator()

function* numGenerator(n = 10) {
  for(let i = 1; i <= n; i++) {
    yield(i)
  }
}

const num = numGenerator(5)

// Custom generator =====
const iterator = {
  [Symbol.iterator](n = 10) {
  // gen(n) {
    let i = 0
    return {
      next: () => {
        if(i < n) {
          return { value: ++i, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}

// for of, Symbol.iterator =====
for(let k of iterator) {
  console.log(k)
}