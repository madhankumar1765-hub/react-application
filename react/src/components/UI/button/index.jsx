const Button =({name,onClick}) => {
  return (
    <button className="buttonContainer"onClick ={onClick}>
      {name}
    </button>
  )
}
export default Button