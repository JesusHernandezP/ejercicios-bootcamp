// import { suma } from ''

const config = {
  api_url: 'https://fakestoreapi.com/products',
  server_port: 8080
}

const suma = (a,b) => a + b

function resta(a,b) {
  return a - b
}

export const multiplicar = (a,b) => a * b

export {
  suma,
  resta
}

export default config
