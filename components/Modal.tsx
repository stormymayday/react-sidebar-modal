"use client";

import { useAppContext } from "@/context/AppContext";
import { FaTimes } from "react-icons/fa";

function Modal() {
    const { isModalOpen, setIsModalOpen } = useAppContext();

    return (
        <div
            className={
                isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
            }
        >
            <div className="modal-container">
                <h3>modal content</h3>
                <button
                    className="close-modal-btn"
                    onClick={() => setIsModalOpen(!isModalOpen)}
                >
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}
export default Modal;
