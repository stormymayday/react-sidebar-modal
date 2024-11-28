"use client";

import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react";

const AppContext = createContext<{
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}>({
    isSidebarOpen: false,
    setIsSidebarOpen: () => {},
    isModalOpen: false,
    setIsModalOpen: () => {},
});

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                setIsSidebarOpen,
                isModalOpen,
                setIsModalOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { useAppContext, AppProvider };
