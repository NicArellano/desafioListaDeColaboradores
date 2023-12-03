import { useState } from 'react'
import colaboradores from '../data/Colaboradores'
import Formulario from './Formulario'
import Table from 'react-bootstrap/Table'



const Listado = (handleSubmit) => {

  
  const [stateColaboradores, setStateColaboradores] = useState(colaboradores)
  

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
        {stateColaboradores.map((colaboradores)=> {
          return (
         <tr key={colaboradores.id}>
          <td>{colaboradores.nombre}</td>
          <td>{colaboradores.correo}</td>
          <td>{colaboradores.edad}</td>
          <td>{colaboradores.cargo}</td>
          <td>{colaboradores.telefono}</td>
          
         </tr> )
        } )}
      </tbody>
    </Table>
    <Formulario propsFormulario={handleSubmit}/>
    </div>
  )
}
  
export default Listado