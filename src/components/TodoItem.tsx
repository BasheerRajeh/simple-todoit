import { twMerge } from "tailwind-merge";
import { ITodo } from "../types";
import Button from "./Button";
import spriteUrl from "../assets/svg-sprite.svg?url";

interface TodoItemProps {
    todo: ITodo;
    onComplete: (id: string) => void;
    onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onRemove }) => {
    return (
        <li
            key={todo.id}
            className={twMerge(
                "py-3 px-3 rounded-lg text-2xl flex items-center justify-between bg-gray-200 gap-4 hover:bg-teal-500/10",
                todo.isCompleted ? "bg-sky-100" : ""
            )}
        >
            <Button
                varient={todo.isCompleted ? "success" : "solid"}
                aria-label={
                    todo.isCompleted ? "Completed todo" : "Uncompleted todo"
                }
                onClick={() => onComplete(todo.id)}
                className="w-8 h-8 p-2 flex justify-center items-center"
            >
                {todo.isCompleted ? (
                    <svg width={16} height={16}>
                        <use xlinkHref={`${spriteUrl}#check`}></use>
                    </svg>
                ) : null}
            </Button>
            <h3 className="flex-grow">{todo.title}</h3>
            <Button onClick={() => onRemove(todo.id)} className="hover:text-rose-500 transition-all">
                <svg width={16} height={16} >
                    <use xlinkHref={`${spriteUrl}#cross`}></use>
                </svg>
            </Button>
        </li>
    );
};

export default TodoItem;