import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    varient?: "ghost" | "success" | "solid" | "outlined";
}

const Button: React.FC<ButtonProps> = ({
    children,
    varient = "ghost",
    className,
    ...props
}) => {
    return (
        <button
            className={twMerge(
                twMerge(
                    "px-4 py-2 rounded-lg cursor-pointer bg-transparent transition-all  outline-none",
                    Object({
                        ghost: "text-gray-500 hover:text-black focus:text-black",
                        solid: "text-gray-700 bg-gray-300 hover:bg-gray-500 hover:text-black focus:text-black",
                        success: "text-white bg-green-500 hover:bg-green-700",
                        outlined: "border-2 border-gray-500 hover:border-black",
                    })[varient]
                ),
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
