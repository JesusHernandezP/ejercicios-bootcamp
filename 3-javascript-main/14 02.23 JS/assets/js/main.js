

const p = document.querySelector('.resultado')

function sumar(num1, num2) {
  if (num1 === undefined) return 'Argumento 1 no fue entregado'
  if (num2 === undefined) return 'Argumento 2 no fue entregado'
  if (typeof num1 !== 'number') return 'Argumento 1 no válido'

  // if (num1 === 1) {
  //   const num3 = 3
  // } else {
  //   const num3 = 0
  // }

  return num1 + num2 // + num3
}

// console.log(hola)

const restar = (num1, num2) => {
  if (num1 === undefined) return 'Argumento 1 no fue entregado'
  if (num2 === undefined) return 'Argumento 2 no fue entregado'
  if (typeof num1 !== 'number') return 'Argumento 1 no válido'

  return num1 - num2
}

const esPar = (num) => num % 2 === 0

const r = sumar(1, 0)
const resta = restar(10, 5)
const num = esPar(424234)

p.innerHTML = `El resultado de la suma es: ${r} y de la resta es: ${resta}`
