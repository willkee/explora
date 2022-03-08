import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import "./SignUpForm.css";

const SignupFormModal = ({ isLoaded }) => {
    const [showSignupModal, setShowSignupModal] = useState(false);

    return (
        <div>
            <button
                className="nav-link signup-link"
                onClick={() => setShowSignupModal(true)}
            >
                Sign Up
            </button>
            {showSignupModal && (
                <Modal onClose={() => setShowSignupModal(false)}>
                    <SignupForm isLoaded={isLoaded} />
                </Modal>
            )}
        </div>
    );
};

export default SignupFormModal;
