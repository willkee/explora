import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditQuestion from "./EditQuestion";

const EditQuestionModal = ({ question }) => {
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    return (
        <div className="edit-q-container">
            <button
                className="nav-link-edit-question"
                onClick={() => setShowQuestionModal(true)}
            >
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
            {showQuestionModal && (
                <Modal onClose={() => setShowQuestionModal(false)}>
                    <EditQuestion
                        question={question}
                        setShowQuestionModal={setShowQuestionModal}
                    />
                </Modal>
            )}
        </div>
    );
};

export default EditQuestionModal;
