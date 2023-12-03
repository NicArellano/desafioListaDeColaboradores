import { useState } from 'react'
import colaboradores from '../data/Colaboradores'
import Formulario from './Formulario'
import Table from 'react-bootstrap/Table'
import Buscador from './Buscador'



const Listado = () => {

  
  const [stateColaboradores, setStateColaboradores] = useState(colaboradores)
  const  agregarColaborador = (newColaborador) => {
    setStateColaboradores([...stateColaboradores, newColaborador])
  }

  return (
    <div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {stateColaboradores.map((colaboradores, i)=> {
          return (
         <tr key={i}>
          <td>{colaboradores.nombre}</td>
          <td>{colaboradores.correo}</td>
          <td>{colaboradores.edad}</td>
          <td>{colaboradores.cargo}</td>
          <td>{colaboradores.telefono}</td>          
         </tr> )
        } )}
      </tbody>
    </Table>
    <Formulario agregarColaborador={agregarColaborador}/>
    <Buscador />
    </div>
  )
}
  
export default Listado