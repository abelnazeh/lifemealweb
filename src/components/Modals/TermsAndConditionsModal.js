import FormButton from ".././generic/FormButton";
import Modal from ".././generic/Modal";
import TermsAndCondtionsComponent from "../generic/TermsAndConditionComponent";

const TermsAndConditionsModal = ({ show, handleClose, acceptTerms }) => {
  return (
    <section className="card-modal terms-conditions-container">
      <Modal show={show} handleClose={handleClose}>
        <div className="terms-modal-header">
        Terms and Conditions
        </div>
        <div className="modal-content-scroll">

        <TermsAndCondtionsComponent/>
        </div>

        <div className="close-btn-form-modal">
          <FormButton
            label="Decline"
            type="button"
            className="second-btn"
            handleClick={handleClose}
          /> &nbsp;&nbsp;
             <FormButton
            label="Accept"
            type="button"
            className="form-button"
            handleClick={acceptTerms}
          />
        </div>
      </Modal>
    </section>
  );
};

export default TermsAndConditionsModal;
