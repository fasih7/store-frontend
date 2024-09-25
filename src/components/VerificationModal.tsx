import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { Modal } from "react-bootstrap";
import authService from "../domain/services/auth.service";

interface VerificationModalProps {
  showCodeModal: boolean;
  email: string;
}

const VerificationModal: React.FC<any> = ({
  showCodeModal,
  email,
  handleClose,
}) => {
  const [code, setCode] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleOnVerify = async () => {
    if (code.length === 6) {
      const result = await authService.signUp({ name: "ali" });
      console.log(result);
    }
  };

  return (
    <Modal show={showCodeModal} onHide={handleClose} centered>
      <div className="card py-5 px-4 text-center custom-modal-card">
        <h5 className="m-0 mb-3 font-weight-bold">Email Verification</h5>
        <span className="mobile-text text-muted">
          Enter the code we just sent to your email{" "}
          <b className="text-danger">{email}</b>
        </span>

        <div className="d-flex justify-content-center mt-4">
          <input
            type="text"
            className="form-control input-code mx-1 text-center"
            maxLength={6}
            value={code}
            onChange={handleInputChange}
            autoFocus
          />
        </div>

        <button
          className={`btn btn-primary mt-4 ${
            code.length === 6 ? "active" : "disabled"
          }`}
          disabled={code.length !== 6}
          onClick={handleOnVerify}
        >
          Verify
        </button>

        <div className="text-center mt-4">
          <span className="d-block mobile-text text-muted">
            Didn't receive the code?
          </span>
          <span className="font-weight-bold text-danger cursor-pointer">
            Resend
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default VerificationModal;
