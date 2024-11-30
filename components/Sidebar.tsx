"use client";

import { useAppContext } from "@/context/AppContext";
import { links, social } from "@/data";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <h4 className="logo">
                    Your <span> Logo</span>
                </h4>
                <button
                    className="close-btn"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon} {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="social-links">
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
export default Sidebar;
