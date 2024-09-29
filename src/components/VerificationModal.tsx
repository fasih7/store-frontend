import { useState } from "react";
import { Modal } from "react-bootstrap";
import authService from "../domain/services/auth.service";
import InfoModel from "../shared/components/infoModal";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const VerificationModal: React.FC<any> = ({
  showCodeModal,
  email,
  handleClose,
}) => {
  const [code, setCode] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something Went Wrong");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleOnVerify = async () => {
    if (code.length === 6) {
      const result = await authService.verifyToken(email, code);

      if (result.access_token) {
        const { access_token } = result;
        login(access_token);
        navigate("/");
      }

      result.error?.message
        ? setErrorMessage(result.error.message)
        : setErrorMessage("Something went wrong");
      setShowInfoModal(true);
    }
  };

  const handleResendVerificationToken = async () => {
    const response = await authService.resendVerificationToken(email);
    if (response.success) setCode("");
    if (response.error) {
      setErrorMessage(response.error.message);
      setShowInfoModal(true);
    }
  };

  //   {
  //     "error": {
  //         "statusCode": 404,
  //         "error": "Not Found",
  //         "message": "Not found"
  //     }
  // }

  // {
  //   "error": {
  //       "statusCode": 401,
  //       "error": "Unauthorized",
  //       "message": "Incorrect token. 2 tries left"
  //   }
  // }

  return (
    <>
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
            <button
              className="font-weight-bold text-danger cursor-pointer"
              style={{ border: "none" }}
              onClick={handleResendVerificationToken}
            >
              Resend
            </button>
          </div>
        </div>
      </Modal>
      <InfoModel
        showModal={showInfoModal}
        message={errorMessage}
        type="error"
        handleClose={() => setShowInfoModal(false)}
      />
    </>
  );
};

export default VerificationModal;
