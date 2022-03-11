import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteQuestion from "./DeleteQuestion";

const DeleteQuestionModal = ({ question, setDidDelete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className="delete-q-container">
            <button
                className="nav-link-delete-question"
                onClick={() => setShowDeleteModal(true)}
            >
                <i className="fa-regular fa-trash-can"></i>
            </button>
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <DeleteQuestion
                        question={question}
                        setShowDeleteModal={setShowDeleteModal}
                        setDidDelete={setDidDelete}
                    />
                </Modal>
            )}
        </div>
    );
};

export default DeleteQuestionModal;
