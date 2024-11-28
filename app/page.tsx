import Sidebar from "@/components/Sidebar";
import Modal from "@/components/Modal";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
    return (
        <main>
            <AppProvider>
                <Sidebar />
                <Modal />
            </AppProvider>
        </main>
    );
}
