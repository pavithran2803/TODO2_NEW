// const button = document.querySelector('button')
// const input = document.querySelector('input')
// const div = document.querySelector('div')

// button.addEventListener('click', (req, res) => {
//     localStorage.setItem('inputvalue',input.value)
//     div.innerHTML =localStorage.getItem('inputvalue')
// })

const arr=[1,2,3,4]
localStorage.setItem('val',JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('val')))