import { useState } from "react";
import LayoutWrapper from "../layout";
import useLocalStorage from "../hooks/useLocalStorage";
import { generateId } from "../utils/generate-id";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import Filter from "../components/Filter";
import { IFilter, ITodo } from "../types";

import "../assets/css/app.css";

const App = () => {
    const [todos, setTodos] = useLocalStorage<ITodo[]>("todos", []);
    const [filter, setFilter] = useState<IFilter>("all");

    const filteredTodos = todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "completed") return todo.isCompleted === true;
        if (filter === "uncompleted") return todo.isCompleted === false;
    });

    function addTodo(title: string): void {
        return setTodos([
            ...todos,
            { id: generateId(), title, isCompleted: false },
        ]);
    }

    const removeTodo = (id: string) =>
        setTodos(todos.filter((todo) => todo.id !== id));

    const toggleTodoStatus = (id: string) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(newTodos);
    };

    const handleChangeFilter = (filter: IFilter) => {
        setFilter(filter);
    };

    return (
        <LayoutWrapper className="container my-10 shadow-2xl">
            <AddTodo onAdd={addTodo} />
            <Filter onFilterChange={handleChangeFilter} />
            <ul>
                {filteredTodos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onComplete={toggleTodoStatus}
                        onRemove={removeTodo}
                    />
                ))}
            </ul>
        </LayoutWrapper>
    );
};

export default App;
