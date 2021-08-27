import FormButton from "../generic/FormButton";
import FormInput from "../generic/FormInput";
import Modal from "./Modal";

const SecurityQuestionsModal = ({ show, handleClose, question, answer,onChange,errors }) => {
  return (
    <section className="card-modal">
      <Modal show={show} handleClose={handleClose}>
        <div className="modal-content-main security-modal-content modal-input">
         <div className="question-title">
         Security Question:
             </div>
             <div className="question-text">
             {question}
             </div>
             <div className="answer-label">
             Answer:
             </div>
             
          <br/>
          <div className="email-address-input">
            <FormInput
              label=""
              name="answer"
              type="text"
              value={answer}
              onChange={onChange}
              placeholder="at the meseum park avenue"
              error={errors.answer}
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

export default SecurityQuestionsModal;
