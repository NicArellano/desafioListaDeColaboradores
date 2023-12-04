

const Buscador = ({searchChange, searchValue}) => {

    const handleChange = (e) => {
        const value = e.target.value
        searchChange(value)
    }
  return (
    <input type="text" 
    placeholder="Buscar"
    onChange={handleChange}
    value={searchValue}
    />
  )
}

export default Buscador