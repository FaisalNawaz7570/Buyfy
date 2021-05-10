import React from "react";
import "./ErrorModal.css";
import ModalContainer from './../ModalContainer/ModalContainer';


const ErrorModal = ({error}) => {
  return (
    <ModalContainer>
      <div className="error-modal center">
        <h1>{error}</h1>
      </div>
    </ModalContainer>
  );
};

export default ErrorModal;
