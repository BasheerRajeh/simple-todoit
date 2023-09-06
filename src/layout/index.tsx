import { twMerge } from "tailwind-merge";

import Header from "./Header";

interface LayoutWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
    children,
    className,
}) => {
    return (
        <div
            className={twMerge(
                "mx-auto min-h-screen flex flex-col overflow-x-hidden",
                className
            )}
        >
            <Header />
            <main className="flex-grow">{children}</main>
        </div>
    );
};

export default LayoutWrapper;
