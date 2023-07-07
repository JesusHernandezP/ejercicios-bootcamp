import config, { suma, resta, multiplicar } from './config.js'

const { api_url } = config
// const api_url = config.api_url

const resultado = suma(4,6)
const resultado_resta = resta(4,6)
const resultado_multiplo = multiplicar(4,6)

console.log(config)
console.log(resultado)
console.log(resultado_resta)
console.log(resultado_multiplo)
