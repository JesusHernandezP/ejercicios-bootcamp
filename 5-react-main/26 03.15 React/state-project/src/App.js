import { useState } from 'react'
import Todo from './components/Todo'

function App() {
  const [ todos, setTodos ] = useState([
    {id: 1, text: 'Comprar pan', done: false},
    {id: 2, text: 'Sacar al perro a pasear', done: true},
    {id: 3, text: 'Estudiar React', done: false},
    {id: 4, text: 'Pasar por el gym', done: true}
  ])

  const handleDone = (id) => {
    const index = todos.findIndex(todo => todo.id === id)
    todos[index].done = !todos[index].done
    setTodos([...todos])
  }

  return (
    <>
      <h2>Tareas por completar</h2>
      <ul>
        {todos.map(todo => <Todo key={todo.id} todo={todo} onClick={handleDone} />)}
      </ul>
    </>
  )
}

export default App
