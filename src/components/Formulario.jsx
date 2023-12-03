import { useState } from "react"


const Formulario = ({propsFormulario}) => {

    const [formulario, setFormulario ] = useState({
        nombre: "",
        correo: "",
        edad:"",
        cargo:"",
        telefono:""
    })

const handleSubmit= (e) =>  {
    e.preventDefault()
    console.log("funciona" , formulario)
}

const changeInput = (e) => {
    const input = e.target.name
    const value = e.target.value
    setFormulario({...formulario , [input]: value})
   
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Agregar nombre"
            name="nombre"
            onChange={changeInput}
            value={formulario.nombre}
            />

            <input type="email" 
            placeholder="Agregar correo"
            name="correo"
            onChange={changeInput}
            value={formulario.correo}
            />

            <input type="text" 
            placeholder="Edad?"
            name="edad"
            onChange={changeInput}
            value={formulario.edad}
            />

            <input type="text" 
            placeholder="Cargo?"
            name="cargo"
            onChange={changeInput}
            value={formulario.cargo}
            />

            <input type="number" 
            placeholder="Agregar telefono"
            name="telefono"
            onChange={changeInput}
            value={formulario.telefono}
            />

            <input type="submit" value="Añadir"/>
        </form>
    </div>
  )
}

export default Formulario