import React from 'react'
import TableHeader from './components/TableHeader'
import TableBody from './components/TableBody'
import Table from './components/Table'
import NavBar from './components/NavBar.js'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <h1 className="header">Hello, React!</h1>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  )
}

export default App
