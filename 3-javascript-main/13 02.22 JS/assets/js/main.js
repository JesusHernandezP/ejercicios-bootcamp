/*
const name = prompt('Escribe tu nombre')
const age = prompt('Dame tu edad')

console.log('Hola ' + name + ', de ' + age + ' años de edad.')
console.log(`Hola ${name}, de ${age} años de edad.`)
*/
/*
const numeroUno = Number(prompt('Dime el primer número'))
const numeroDos = Number(prompt('Dime el segundo número'))

// const numeroUnoConvertido = parseInt(numeroUno)
// const numeroDosConvertido = parseInt(numeroDos)
// const numeroUnoConvertido = parseFloat(numeroUno)
// const numeroDosConvertido = parseFloat(numeroDos)

console.log(numeroUno, numeroDos)
*/


/*
const p = document.querySelector('p')
const name = prompt('Dime tu nombre')
const age = prompt('Dime tu edad')
const text = `Hola ${name},\n\t estas seguro/a que tienes ${age} años de edad?`

const a = 'She said: "I don\'t know"'
const b = ""
const c = ``

// 

// p.innerText = text
console.log(text)
*/
/*
const p = document.querySelector('p')
const name = prompt('Dime tu nombre')
const long = name.length
const text = `El Nombre Tiene: ${long} Caracteres`
// p.innerHTML = text.toUpperCase()
p.innerHTML = text.toLowerCase()
*/
/*
const p = document.querySelector('p')
// const num = Math.round(6.5)      // Redondeado clásico
// const num = Math.ceil(6.2)       // Redondeado siempre hacia arriba
// const num = Math.floor(6.9)      // Redondeado siempre hacia abajo
// const num = Math.abs(-10)        // Número Absoluto
// const num = Math.max(10, 11, 19)    // Entrega el número más alto
// const num = Math.min(10, 11, 19)    // Entrega el número más bajo
// const num = Math.round(Math.random() * 10)

// p.innerHTML = `El numero redondeado es: ${num}`
// p.innerHTML = `El numero es: ${num}`

const age = Number(prompt('Dime tu edad'))
p.innerHTML = `El número es inválido: ${isNaN(age)}`
p.innerHTML += `. El número es un entero: ${Number.isInteger(age)}`
*/

/*
const date = {
  dia: 22,
  mes: 2,
  año: 2023,
  hora: 17,
  mins: 56,
  timeStamp: 1677084693188,
}

// const date = Date.now()
// console.log(date)

const now = new Date()
console.log(now)

const timestamp = now.getTime()
console.log(timestamp)

const current_date = new Date(timestamp)
console.log(current_date)

console.log(now.getFullYear())
console.log(now.getMilliseconds())
*/

// console.log( 1 === '1' )

const p = document.querySelector('p')
const nombre = prompt('Escribe tu nombre')
const age = Number(prompt('Escribe tu nombre'))

const nombre_comparacion = nombre.toLowerCase().trim()

if (nombre_comparacion === 'Juan'.toLowerCase()) {
  p.innerHTML = 'Hola Juan, te estábamos esperando! 🥳🎉'
} else if (nombre_comparacion === 'Pedro'.toLowerCase()) {
  p.innerHTML = `Hola ${nombre}, hace tiempo no te veíamos! 🥳🎉`
} else {
  p.innerHTML = `Hola ${nombre}, siéntate como en tu casa!`
}

// if (age >= 18) {
//   // Vender alcohol
// } else {
//   // redireccionar a disney.com
// }


console.log( 1 == '1')      // Compara valores
console.log( 1 === '1')     // Compara valores y tipos de valores
console.log( 1 != '1')      // Si es distinto
console.log( 1 !== '1')     // Si es distinto en valor y tipos de valores

console.log( 1 > 1 )        // Si es mayor que
console.log( 1 < 1 )        // Si es menor que
console.log( 1 >= 1 )       // Si es mayor o igual que
console.log( 1 <= 1 )       // Si es menor o igual que

console.log( a == 1 && b == 2 && c == 3 )   // Se deben cumplir ambas condiciones para que todo sea verdadero. Una vez que evalúa una condición falsa, deja de evaluar el resto
console.log( a == 1 || b == 2 || c == 3 )   // Con que una condición sea verdadera es todo verdadero. Encuentra una condición verdadera y deja de evaluar

// if ( edad >= 18 || (licencia_conducir === true && conduce_baja_velocidad) ) {
//   // 
// }


const edad = 19
const mayorDeEdad = edad > 17

// if (edad > 17) console.log('Bienvenido, puedes tomar alcohol 🍺')

