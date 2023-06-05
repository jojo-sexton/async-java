fetch('todos/poppy.json').then(response =>{
  console.log('resolved',response)
  return response.json().then((data) => {
    console.log(data)
  }
  )
}).catch (err => {
  console.log('could not get data', err)
})



// //a promise is a function go fetch something and returns 2 outcomes resolve or reject.

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//       } else if (request.readyState === 4) {
//         reject('error getting resource')
//       }
//     })
//     request.open('GET', resource)
//     request.send()
//   })
// }

// getTodos('todos/poppy.json')
//   .then((data) => {
//     console.log('promise 1 resoved', data)
//     //second task
//     return getTodos('todos/mum.json').then((data) => {
//       console.log('promise 2 resolved', data)
//       return getTodos('todos/dad.json').then((data) => {
//         console.log('promise 3 resolved', data)
//       })
//     })
//   })
//   .catch((err) => console.log('promise rejected', err))
