const ButtonComponent = function (props) {
  console.log(props)
  return <button className={props.className}> {props.type} </button>
}

export default ButtonComponent
