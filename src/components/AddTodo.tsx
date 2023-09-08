import { FormEvent, useState } from "react";

import spriteUrl from "../assets/svg-sprite.svg?url";
import Button from "./Button";

interface AddTodoProps {
    onAdd: (title: string) => void;
}

function AddTodo({ onAdd }: AddTodoProps) {
    const [title, setTitle] = useState("");

    const handleAddTodo = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onAdd(title);
        setTitle("");
    };

    return (
        <form
            className="flex items-center"
            onSubmit={(evt) => handleAddTodo(evt)}
        >
            <input
                type="text"
                className="text-3xl flex-grow px-2 pt-4 pb-1 border-b-2 focus-within:border-b-4 focus:border-b-4 border-gray-200 focus:border-gray-400 focus-within:border-gray-400 outline-none transition-all"
                value={title}
                placeholder="Add Todo"
                required
                onChange={(evt) => setTitle(evt.target.value)}
            />
            <Button aria-label="Add Todo">
                <svg width={15} height={15} className="rotate-45">
                    <use xlinkHref={`${spriteUrl}#cross`}></use>
                </svg>
            </Button>
        </form>
    );
}

export default AddTodo;
