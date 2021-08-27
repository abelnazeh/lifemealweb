
import FormButton from "../generic/FormButton";
import Modal from "./Modal";

const SuccessfullPasswordResetModal = ({ show, handleClose, email }) => {
  return (
    <section className="card-modal">
      <Modal show={show} handleClose={handleClose}>
        <div className="signup-modal-avatar modal-success-avatar"></div>
        <div className="modal-content-main modal-input">
          <div className="text-header-reset">Success</div>
          <br />
          <div className="success-text-password-reset">
            {`Your new PIN has been sent to your email (${email}), please do check and proceed to login.`}
          </div>
        </div>
        <div className="close-btn-form-modal">
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

export default SuccessfullPasswordResetModal;
