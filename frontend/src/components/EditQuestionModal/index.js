import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditQuestion from "./EditQuestion";

const EditQuestionModal = () => {
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    return (
        <div className="edit-q-container">
            <button
                className="nav-link-edit-question"
                onClick={() => setShowQuestionModal(true)}
            >
                <i className="fa-regular fa-square-plus"></i>
            </button>
            {showQuestionModal && (
                <Modal onClose={() => setShowQuestionModal(false)}>
                    <EditQuestion setShowQuestionModal={setShowQuestionModal} />
                </Modal>
            )}
        </div>
    );
};

export default EditQuestionModal;
