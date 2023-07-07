import NavLi from "./NavLi.js"

const navLinks = [
  {id: 1, text: 'Inicio', url: '#'},
  {id: 2, text: 'Productos', url: '#'},
  {id: 3, text: 'Contacto', url: '#'}
]

function NavBar(props) {
  return <nav>
    <ul>
      {navLinks.map(link => <NavLi key={link.id} text={link.text} />)}
    </ul>
  </nav>
}

export default NavBar
