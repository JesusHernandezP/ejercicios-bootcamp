import { useEffect, useState } from "react"
import useServer from "../hooks/useServer.js"

function Todos() {
  const { get } = useServer()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await get({ url: '/todos' })
      setTodos(data)
    })()
  }, [])

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return <>
    <h1>ToDos</h1>

  </>
}

export default Todos
