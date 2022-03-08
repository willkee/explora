import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddQuestion from "./AddQuestion";
import "./AddQuestion.css";

const AddQuestionModal = () => {
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    return (
        <div className="add-q-container">
            <button
                className="nav-link-add-question"
                onClick={() => setShowQuestionModal(true)}
            >
                <i className="fa-regular fa-square-plus"></i>
                <span>ADD QUESTION</span>
            </button>
            {showQuestionModal && (
                <Modal onClose={() => setShowQuestionModal(false)}>
                    <AddQuestion setShowQuestionModal={setShowQuestionModal} />
                </Modal>
            )}
        </div>
    );
};

export default AddQuestionModal;
