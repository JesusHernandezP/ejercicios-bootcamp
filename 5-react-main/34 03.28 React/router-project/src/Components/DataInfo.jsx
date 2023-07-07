import { useParams } from "react-router-dom";
import data from '../db.json'

function DataInfo() {
    const { id } = useParams()
    const user = data.find(p => p.id === Number(id))

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <p style={{marginBottom: 0}}>Nombre: <strong>{user.name}</strong></p>
            <p style={{marginTop: 0}}>Puesto: <strong>{user.role}</strong></p>


        </section>
    )
}

export default DataInfo