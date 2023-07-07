import TableRow from "./TableRow.js"
const users = [
  {id: 1, name: "Zoe", job: "Teacher"},
  {id: 2, name: "David", job: "Teacher"},
  {id: 3, name: "Samuel", job: "Teacher"},
  {id: 4, name: "Berto", job: "Coordinator"},
  {id: 5, name: "Juan", job: "Admin"},
  {id: 6, name: "Diego", job: "Teacher"},
  {id: 7, name: "Pedro", job: null}
]

function TableBody(props) {
  return (
  <tbody>
    {users.map(user => <TableRow key={user.id} name={user.name} job={user.job} />)}
  </tbody>
  )
}

export default TableBody
