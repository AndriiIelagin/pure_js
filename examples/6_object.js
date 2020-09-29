const person = Object.create({
  calculateAge() {
    console.log('Age:', new Date().getFullYear() - this.birthYear)
  }
}, {
  name: {
    value: 'Andrew',
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthYear: {
    value: 1984,
    enumerable: false,
    writable: false,
    configurable: false
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear
    },
    set(value) {
      document.body.style.background = 'green'
      console.log('Set age', value)
    }
  }
})

for (let key in person) {
  if(person.hasOwnProperty(key)) {
    console.log('Key', key, person[key])
  }
}