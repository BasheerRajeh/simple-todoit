import { ITodo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: ITodo[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    return (
        <ul className="flex flex-col gap-3">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onComplete={onToggle}
                        onRemove={onRemove}
                    />
                ))
            ) : (
                <div className="h-96 flex flex-col justify-center items-center">
                    <h3 className="font-bold text-4xl text-gray-400 tracking-wider text-center">
                        List is empty! <br /> Be Productive and add todos.
                    </h3>
                </div>
            )}
        </ul>
    );
};

export default TodoList;
