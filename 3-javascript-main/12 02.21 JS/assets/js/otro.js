// Esto es un comentario de 1 sola línea

/*
	Este comentario es de varias
  líneas, por favor escriba lo justo y necesario
*/

// console.log("Hola Mundo!");

/*
	--color-blanco: #fff;
*/

var saludar = "Mi nombre es Juan";
// saludar tiene un tipo de datos string (string of characters)
// cadena o Cadena de texto en español

// console.log(saludar);

var edad = 18; // Número
var peso = 25.7; // Número

var mayoDeEdad = true; // Boolean -> true, false

var arr = ['a','b','c','d','e','f']; // Array
// console.log(arr[0]);

var obj = {
  saludar: ['hola', 'hello', 'onishiwa'],
  despedir: 'chao',
  informal: 'qué tal?'
};

obj['saludar'][1];
obj.informal;

var persona = {
  nombre: 'Irene',
  apellido: 'Vanososte',
  edad: 30,
  mayorEdad: true,
  colorPelo: 'castaño',
  perfil: {
    small: '',
    big: ''
  }
}

// persona.mayorEdad

var productos = [
  { nombre: 'Azúcar', marca: 'blanca', precio: 2 },
  { nombre: 'Harina', marca: 'Pan', precio: 2.5 },
  { nombre: 'Café Descafeinado', marca: 'Doña Juana', precio: 3 },
];

productos[1].nombre;

// Expresiones
2 + 2;
'Hola ' + 'Mundo!';
productos[1].nombre + ' de marca: ' + productos[1].marca;

console.log(2 - 2);
console.log(persona.edad * 2);

"Hace " + (persona.edad - edad) + " soy mayor de edad"

console.log(10 / 2);

console.log(1724.35 / 2);
console.log(1724.35 % 2);
console.log(0.35 / 1);
console.log(0.35 % 1);
console.log(0.35 % 0.5);
console.log(0.35 / 0.5);
