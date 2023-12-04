import { useState } from 'react'
import colaboradores from '../data/Colaboradores'
import Formulario from './Formulario'
import Table from 'react-bootstrap/Table'
import Buscador from './Buscador'



const Listado = () => {

  
  const [stateColaboradores, setStateColaboradores] = useState(colaboradores)
  const  agregarColaborador = (newColaborador) => {
    setStateColaboradores([...stateColaboradores, newColaborador])}

  const [searchInput, setSearchInput] = useState("")
  const handleSearch = (value) => {
    setSearchInput(value)
  }

  const filterColaboradores = (colaborador) => {
    return Object.entries(colaborador).some(([key, value]) => {
      /* Object.entries(colaborador): Convierte el objeto colaborador en un array de sus pares clave-valor. 
      Por ejemplo, si colaborador es { nombre: 'John', correo: 'john@example.com', edad: 25 }, 
      Object.entries(colaborador) dará como resultado [['nombre', 'John'], ['correo', 'john@example.com'], ['edad', 25]]. 
      .some(([key, value]) => { ... }): Itera sobre cada par clave-valor en el array y verifica si al menos uno de ellos cumple con la condición especificada dentro de la función de retorno.*/
      
      if (typeof value === 'string') { /* if (typeof value === 'string'): Verifica si el valor actual es una cadena. */
        return value.toLowerCase().includes(searchInput.toLowerCase()); /* Si el valor es una cadena, verifica si la versión en minúsculas de la cadena incluye la versión en minúsculas de searchInput */
      
      } else if (key === 'edad') { 
        /* else if (key === 'edad'): Verifica si la clave actual es 'edad', que presumiblemente representa la edad.
        Si la clave es 'edad', convierte el valor numérico a una cadena y verifica si incluye searchInput. Esto se usa para buscar por edad. */
        return value.toString().includes(searchInput); // Search by age
      }
      return false; 
      /* return false; // No intentar llamar a toLowerCase() si no es una cadena: Si el valor no es una cadena y la clave no es 'edad', 
      retorna false. Esto asegura que las propiedades que no son cadenas (excluyendo 'edad') no se procesen más en la búsqueda. */
    });
  };



  return (
    <div className='d-flex flex-column gap-2'>

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
        {stateColaboradores
        .filter(filterColaboradores)
        .map((colaboradores, i)=> {
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
    <Buscador searchChange={handleSearch} searchValue={searchInput}/>
    </div>
  )
}
  
export default Listado