import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteAnswer from "./DeleteAnswer";
import "./DeleteAnswer.css";

const DeleteAnswerModal = ({ answer }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className="trash-answer-container">
            <button
                className="nav-link-delete-answer-button"
                onClick={() => setShowDeleteModal(true)}
            >
                <i className="fa-regular fa-trash-can"></i>
            </button>
            {showDeleteModal && (
                <Modal
                    className="outer-delete-answer-container"
                    onClose={() => setShowDeleteModal(false)}
                >
                    <DeleteAnswer
                        answer={answer}
                        setShowDeleteModal={setShowDeleteModal}
                    />
                </Modal>
            )}
        </div>
    );
};

export default DeleteAnswerModal;
