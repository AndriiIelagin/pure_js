// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// =====

// const p = new Promise((resolve, reject) => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   resolve(backendData)
// })

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)
//   })
// })
// .then(result => console.log('result', result))
// .catch(err => console.error('Error: ', err))
// // finally will be executed even if error has occured
// .finally(() => console.log('Finally'))

// =====

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

// sleep(2000).then(() => console.log('After 2 seconds'))
// sleep(3000).then(() => console.log('After 3 seconds'))

// Promise.all([sleep(2000), sleep(5000)])
//   .then(() => {console.log('All promises')})

Promise.race([sleep(2000), sleep(5000)])
  .then(() => {console.log('Race promises')})