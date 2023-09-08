import { FormEvent, useState } from "react";

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
        <form onSubmit={(evt) => handleAddTodo(evt)}>
            <input
                type="text"
                value={title}
                onChange={(evt) => setTitle(evt.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

export default AddTodo;
