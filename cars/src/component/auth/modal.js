// src/component/Modal.js
import React from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
