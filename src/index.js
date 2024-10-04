import React, { useState } from "react";
import ReactDOM from "react-dom"; // Assure-toi d'importer ReactDOM
import Modal from "./lib/Modalsuccess";

const TestModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <button onClick={openModal}>Show Modal</button>
            <Modal isVisible={isModalVisible} onClose={closeModal} message="Employee Created!" />
        </div>
    );
};

ReactDOM.render(<TestModal />, document.getElementById("root"));
