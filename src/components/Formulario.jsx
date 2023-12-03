import { useState } from "react"
import Alert from "./Alert"


const Formulario = ({agregarColaborador}) => {

    const [formulario, setFormulario ] = useState({
        nombre: "",
        correo: "",
        edad:"",
        cargo:"",
        telefono:""
    })

    const [alert, setAlert] = useState(null)

const handleSubmit= (e) =>  {
    e.preventDefault()
    if (formulario.nombre === ""|| formulario.correo === "" || formulario.edad === "" ||
     formulario.cargo  === "" || formulario.telefono === "") {
        setAlert({
            color: "rgb(233, 111, 111)" ,
            text: "Completa todos los campos"
        })}

        else {
            setAlert({
                color: "rgb(164, 207, 101)",
                text: "Colaborador añadido"
            })
            agregarColaborador(formulario)
        }
       
}

const changeInput = (e) => {
    const input = e.target.name
    const value = e.target.value
    setFormulario({...formulario , [input]: value})
   
}



  return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
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

            <input type="submit" value="Añadir" className="bg-success "/>
        </form>
        <div>
            {alert && <Alert color={alert.color} text={alert.text} />}
        </div>
        
    </div>
  )
}

export default Formulario