import React from "react";
import "./Modalsuccess.css";

const Modal = ({ isVisible, onClose, message }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-background">
            <div className="modal-content">
                <p>{message}</p>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
