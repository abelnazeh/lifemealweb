import FormButton from "../generic/FormButton";
import Modal from "./Modal";

const ModalCard = ({ show, handleClose, Modaltittle, ModalContent }) => {
  return (
    <section className="card-modal">
      <Modal show={show} handleClose={handleClose}>
        <div className="signup-modal-avatar modal-success-avatar"></div>
        <div className="modal-heading-title">{Modaltittle}</div>
        <div className="modal-content-main">
            {ModalContent}
        </div>
        <div className="close-btn">
          <FormButton
            label="Close"
            type="button"
            className="form-button"
            handleClick={handleClose}
          />
        </div>
      </Modal>
    </section>
  );
};

export default ModalCard;
