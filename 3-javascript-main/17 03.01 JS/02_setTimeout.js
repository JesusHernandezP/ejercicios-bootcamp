const movies = [
  'Good fellas',
  'Los Picapiedras',
  'Star Wars',
  'The green Book',
  'Spider Man',
  'Los Avengers',
  'Batman',
  'Red Social',
  'El milagro de P.Tinto',
  'Mary Poppins',
  'Avatar',
  'SuperMan',
  'Yo, Robot',
  'El señor de los anillos',
  'Malditos Bastardos',
  'Mario Bros',
]

movies.forEach((movie, index) => {
  setTimeout(() => {
    console.log(movie)
  }, 500 * index)
})