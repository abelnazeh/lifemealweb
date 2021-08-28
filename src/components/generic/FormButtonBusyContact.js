
const FormButtonBusyContact = (props) => (
  <button className={props.className}>
    {props.label}
    <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </button>
);

export default FormButtonBusyContact;
