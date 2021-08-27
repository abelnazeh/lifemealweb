import FormButton from "../generic/FormButton";
import Modal from "./Modal";

const WrongSecurityDetailsModal = ({ show, handleClose,failedMsg }) => {
  return (
    <section className="card-modal">
      <Modal show={show} handleClose={handleClose}>
        <div className="signup-modal-avatar modal-failed-avatar"></div>
        <div className="modal-content-main modal-input">
         <div className="failed-text-reset">
         {failedMsg || 'Wrong Answer!'}
             </div>
          <br/>
       
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

export default WrongSecurityDetailsModal;
