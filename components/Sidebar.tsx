"use client";

import { useAppContext } from "@/context/AppContext";

function Sidebar() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

    return (
        <div>
            <h1>Sidebar</h1>
            {/* <p>Status: {isSidebarOpen ? "true" : "false"}</p>
            <button
                className="btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                toggle
            </button> */}
        </div>
    );
}
export default Sidebar;
