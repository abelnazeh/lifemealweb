import { SendIcon } from "./imagesSVG";



const FormButtonContact = (props) => (
    <button
      type={props.type}
      className={props.className}
      onClick={props.handleClick}>
      {props.label} <SendIcon/>
    </button>
  )

  export default FormButtonContact;