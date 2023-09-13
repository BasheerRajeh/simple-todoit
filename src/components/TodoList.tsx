import { AnimatePresence } from "framer-motion";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    if (todos.length === 0)
        return (
            <div className="h-96 flex flex-col justify-center items-center">
                <h3 className="font-bold text-4xl text-gray-400 tracking-wider text-center">
                    List is empty! <br /> Be Productive and add todos.
                </h3>
            </div>
        );
    return (
        <ul className="flex flex-col gap-3">
            <AnimatePresence>
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onComplete={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </AnimatePresence>
        </ul>
    );
};

export default TodoList;
