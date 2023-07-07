function Form({ search, inputRef }) {
  return <form action="#" onSubmit={search} className="form">
  <input type="text" name='search' onChange={search} ref={inputRef} className="form__input" placeholder='¿Qué superhéroe quieres buscar?' />
  <button type="submit" className="form__submit">Buscar</button>
</form>
}

export default Form
