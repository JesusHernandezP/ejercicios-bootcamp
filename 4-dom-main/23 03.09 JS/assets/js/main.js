const button = document.createElement('a')
button.href = '#'
button.classList.add('click')
const textButton = document.createTextNode('Hazme click!')
button.appendChild(textButton)
document.body.appendChild(button)

button.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e)
})