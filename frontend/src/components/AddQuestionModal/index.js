import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddQuestion from "./AddQuestion";

const AddQuestionModal = () => {
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    return (
        <div>
            <button
                className="nav-link add-question-link"
                onClick={() => setShowQuestionModal(true)}
            >
                <i className="fa-regular fa-square-plus"></i>
                <span>ADD QUESTION</span>
            </button>
            {showQuestionModal && (
                <Modal onClose={() => setShowQuestionModal(false)}>
                    <AddQuestion />
                </Modal>
            )}
        </div>
    );
};

export default AddQuestionModal;
