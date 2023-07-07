import {NavLink, Outlet, Route, Routes} from 'react-router-dom'
import DataInfo from './Components/DataInfo.jsx'
import data from './db.json'

function App() {

  return (
    <>
      <h1>Mi priemera pagina con Router</h1>
      <nav>
        <NavLink href="/">Home</NavLink> { ' | ' }
        <NavLink href="/about">About</NavLink>{ ' | ' }
        <NavLink href="/login">login</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoutes />}>
        <Route path='about' element={<About />} />
        <Route path=':id' element={<DataInfo />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

const Home = () => <h2>Home page</h2>
const Login = () => <h2>Login page</h2>
const About = () => <>
  <h2>About</h2>
  <section style={{display: 'flex'}}>
    <aside style={{width: '200px'}}>
      <nav>
        {data.map(person => <li key={person.id}>
          <NavLink to={`/about/${person.id}`}>{person.name}</NavLink>

        </li>)}
      </nav>
    </aside>
    <Outlet />
  </section>
</>
export default App
