import { useRef, useState } from 'react'
import Form from './components/Form.js'
import Hero from './components/Hero.js'
import marvelHeroes from './marvel_heroes.json'

function App() {
  const [heroes] = useState(marvelHeroes)
  const [result, setResult] = useState(heroes)
  const inputRef = useRef()

  const search = (e) => {
    e.preventDefault()
    const filter = heroes.filter(heroe => heroe.name.toLowerCase().includes(inputRef.current.value.toLowerCase()))
    setResult(filter)
  }

  return (
    <div className="container">
      <h1>Buscar Marvel Heroes</h1>

      <Form search={search} inputRef={inputRef} />

      <ul className="heroes">
        { result.map(heroe => <Hero key={heroe.id} name={heroe.name} thumbnail={heroe.thumbnail} />) }
      </ul>
    </div>
  )
}

export default App
