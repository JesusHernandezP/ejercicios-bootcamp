import { useEffect, useState } from "react"
import { APIBaseURL } from "./config.js";
import json from "./characters.json";

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {

    (async () => {

      try {
        // const res = await fetch('https://rickandmortyapi.com/api/character?page=1')
        // const data = await res.json()
        // setCharacters(data)

        setCharacters(
          json.results.map(char => {
            const character = {
              id: char.id,
              name: char.name,
              image: char.iamge
            }

            return character
          })
        )

      } catch(error) {
        console.error(erro.message)

      }
    })()
    

  }, [])


useEffect(() => {
    (async () => {

  return ('')
}

export default App
