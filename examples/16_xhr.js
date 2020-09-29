

const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if(xhr.status >= 400) {
        reject(xhr.response)
      } else {
        // console.log(JSON.parse(xhr.response))
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  })
}

// sendRequest('GET', requestUrl)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const body = {
  name: 'Andrew',
  age: 35
}

sendRequest('POST', requestUrl, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))