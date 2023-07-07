function Todo({ todo, onClick }) {
  return <li>
    <p style={todo.done ? {textDecoration: 'line-through'} : null}>
      Comprar Pan
    </p>
    <button onClick={() => onClick(todo.id)}>Hecho!</button>
  </li>
}

export default Todo
