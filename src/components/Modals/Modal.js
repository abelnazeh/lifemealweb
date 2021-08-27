

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(showHideClassName);
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
        </section>
      </div>
    );
  };

  export default Modal;