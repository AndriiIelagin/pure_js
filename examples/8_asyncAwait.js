const delay = ms => new Promise(r => setTimeout(() => r(), ms))

const url = 'https://jsonplaceholder.typicode.com/todos'

// ===== PROMISES

// const fetchTodos = () => {
//   console.log('Fetch todos started...')
//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//   .then(data => console.log('data', data))
//   .catch(err => console.error(err))
//   .finally(() => console.log('Finally'))

// ===== ASYNC / AWAIT

async function fetchAsyncTodos() {
  console.log('Fetch todos started...')
  try {
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Finally')
  }
}

fetchAsyncTodos().then(() => console.log('Асинхронная функция все-равно возвращает промис'))