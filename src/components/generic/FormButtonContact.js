import { SendIcon } from "./imagesSVG";



const FormButtonContact = (props) => (
  // console.log(props)
    <button
      type={props.type}
      className={props.className}
      onClick={props.handleClick}>
      {props.label} <SendIcon/>
    </button>
  )

  export default FormButtonContact;