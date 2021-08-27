import FormButton from "./FormButton";
import FormInput from "./FormInput";
import Modal from "./Modal";

const UsernameModal = ({ show, handleClose, email,onChange,errors }) => {
  return (
    <section className="card-modal">
      <Modal show={show} handleClose={handleClose}>
        <div className="signup-modal-avatar modal-email-avatar"></div>
        <div className="modal-content-main modal-input">
         <div className="">
         Hi there, please provide your email address
             </div>
          <br/>
          <div className="email-address-input">
            <FormInput
              label=""
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              placeholder="Johndoe@domain.com"
              error={errors.email}
              required
              className="input"
            />
          </div>
        </div>
        <div className="close-btn-form-modal">
          <FormButton
            label="Submit"
            type="button"
            className="form-button"
            handleClick={handleClose}
          />
        </div>
      </Modal>
    </section>
  );
};

export default UsernameModal;
