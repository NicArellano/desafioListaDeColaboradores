

const Alert = ({text, color}) => {
  return (
    <div style={{backgroundColor: color}} className="rounded-2">
       {text}
    </div>
  )
}

export default Alert