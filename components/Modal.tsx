"use client";

// import { useContext } from "react";
import { useAppContext } from "@/context/AppContext";

function Modal() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isModalOpen, setIsModalOpen } = useAppContext();

    return (
        <div>
            <h1>Modal</h1>
            {/* <p>Status: {isModalOpen ? "true" : "false"}</p>
            <button
                className="btn"
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                toggle
            </button> */}
        </div>
    );
}
export default Modal;
