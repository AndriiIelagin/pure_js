// // const animal = {
// //   name: 'Animal',
// //   age: 5,
// //   hasTail: true
// // }

// class Animal {
//   static type = 'Animal'
//   static sayHello = () => console.log('Hello from an Animal')

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }

//   voice() {
//     console.log('I\'m an Animal' )
//   }
// }

// // const animal = new Animal({
// //   name: 'Animal',
// //   age: 5,
// //   hasTail: true
// // })

// // ======

// class Cat extends Animal {
//   static type = 'CAT'

//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }

//   voice() {
//     super.voice()
//     console.log('I am a Cat')
//   }

//   get ageInfo() {
//     return this.age * 7
//   }

//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }

// const cat = new Cat({
//   name: 'Cat',
//   age: 2,
//   hasTail: true,
//   color: 'white'
// })

// ===== EXAMPLE

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)

    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.color
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'green'
})

const box2 = new Box({
  selector: '#box2',
  size: 140,
  color: 'blue'
})

class Circle extends Box {
  constructor(options) {
    super(options)

    this.$el.style.borderRadius = '50%'
    this.$el.style.border = '1px solid black'
  }
}

const c = new Circle({
  selector: '#circle',
  size: 90,
  color: 'red'
})