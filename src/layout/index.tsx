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
                "mx-auto flex flex-col overflow-x-hidden",
                className
            )}
        >
            <Header />
            <main className="flex-grow p-10">{children}</main>
        </div>
    );
};

export default LayoutWrapper;
