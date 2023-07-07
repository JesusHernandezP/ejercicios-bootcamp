import React from 'react'

function TableRow({ name = 'No definido', job = 'En espera' }) {
  // const name = props.name
  // const job = props.job
  // const { name, job } = props

  // return React.createElement('tr', {}, 
  //   React.createElement('td', {}, name), 
  //   React.createElement('td', {}, job)
  // )
  return <tr>
    <td>{name}</td>
    <td>{job}</td>
  </tr>
}

export default TableRow
