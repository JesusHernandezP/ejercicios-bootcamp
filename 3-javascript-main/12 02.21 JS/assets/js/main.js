let hola = 30
let chao = hola

chao = chao + 1
console.log({ hola, chao })

const productos = [
  { nombre: 'Azúcar', marca: 'blanca', precio: 2 },
  { nombre: 'Harina', marca: 'Pan', precio: 2.5 },
  { nombre: 'Café Descafeinado', marca: 'Doña Juana', precio: 3 },
]
let arr = productos

arr[0].nombre = 'Sal'
arr[0].marca = 'bahía'
console.log({ arr, productos })
