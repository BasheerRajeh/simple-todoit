import { ITodo } from "../types";

interface TodoItemProps {
    todo: ITodo;
    onComplete: (id: string) => void;
    onRemove: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onComplete, onRemove }) => {
    return (
        <li key={todo.id}>
            <button onClick={() => onComplete(todo.id)}>
                {todo.isCompleted ? "V" : "O"}
            </button>
            {todo.title}
            <button onClick={() => onRemove(todo.id)}>X</button>
        </li>
    );
};

export default TodoItem;
