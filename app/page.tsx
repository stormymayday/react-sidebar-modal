"use client";

import Sidebar from "@/components/Sidebar";
import Modal from "@/components/Modal";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
    const { isModalOpen, setIsModalOpen, isSidebarOpen, setIsSidebarOpen } =
        useAppContext();
    return (
        <>
            <main>
                <button
                    onClick={() => {
                        setIsSidebarOpen(!isSidebarOpen);
                    }}
                    className="sidebar-toggle"
                >
                    <FaBars />
                </button>
                <p>Status: {isModalOpen ? "true" : "false"}</p>
                <button
                    onClick={() => {
                        setIsModalOpen(!isModalOpen);
                    }}
                    className="btn"
                >
                    open modal
                </button>
            </main>
            <Sidebar />
            <Modal />
        </>
    );
}
