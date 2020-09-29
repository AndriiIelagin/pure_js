// ===========================
// Objects
// ===========================
const person = {
  name: 'Andrew',
  age:  '35',
  job: 'Software Engineer'
}

const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`)
    if(!(prop in target)) {
      return prop
      .split('_')
      .map(p => target[p])
      .join(' ')
    }
    return target[prop]
  },
  set(target, prop, value) {
    if(prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['name', 'age', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deleting property...', prop)
    delete target[prop]
  }
})

// ===========================
// Fucntions
// ===========================

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
  // thisArg - context
  apply(target, thisArg, args) {
    console.log(`Calling fn ${target}...`)
    console.log('thisArg', thisArg)
    console.log('args', args)

    return target.apply(thisArg, args).toUpperCase()
  }
})

// ===========================
// Classes
// ===========================

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct...', args)

    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop ${prop}`)

        return t[prop]
      }
    })
  }
})

// ===========================
// PRACTICE
// ===========================

// Wrapper =====
const withDefaultValut = (target, defaultValue) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
  })
}

const position = withDefaultValut({
  x: 25,
  y: 52
}, 0)


// Hidden properties =====
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj)
      .filter(p => !p.startsWith(prefix)),
      // receiver это сам Proxy, с которым мы работаем
    get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
  })
}

const data = withHiddenProps({
  name: 'Andrew',
  age: 35,
  _uid: '1446763789'
})

// Optimisation =====

const userData = [
  {id: 1, name: 'Andrew', job: 'Fullstack', age: 35},
  {id: 2, name: 'Iryna', job: 'Designer', age: 31},
  {id: 3, name: 'Lydmila', job: 'Accountant', age: 55},
  {id: 4, name: 'Aleksandr', job: 'Electrician', age: 55},
]

// const index = {}

// userData.forEach(i => (index[i.id] = i))

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    console.log('Array constructor was called with args', args)
    const index = {}
    args.forEach(item => index[item.id] = item);

    return new Proxy(new target(...args), {
      get(arr, prop) {
        console.log('GET arr', arr)
        switch(prop) {

          case 'push':
            return item => {
              console.log('item', item)
              console.log('arr[prop]', arr[prop])
              index[item.id] = item
              return arr[prop].call(arr, item)
            }

          case 'findById': 
            return id => index[id]
          default: return arr[prop]
        }
      }
    })
  }
})

const users = new IndexedArray(userData)