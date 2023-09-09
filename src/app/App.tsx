import { useState } from "react";
import LayoutWrapper from "../layout";
import useLocalStorage from "../hooks/useLocalStorage";
import { generateId } from "../utils/generate-id";
import AddTodo from "../components/AddTodo";
import Filter from "../components/Filter";
import { IFilter, ITodo } from "../types";

import TodoList from "../components/TodoList";
import Button from "../components/Button";
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
            { id: generateId(), title, isCompleted: false },
            ...todos,
        ]);
    }

    const removeTodo = (id: string) =>
        setTodos(todos.filter((todo) => todo.id !== id));

    const toggleTodoStatus = (id: string) => {
        const currentIndex = todos.findIndex((todo) => todo.id === id);
        setTodos((prev) => {
            const newTodos = [
                ...prev.slice(0, currentIndex),
                ...prev.slice(currentIndex + 1),
                {
                    ...prev[currentIndex],
                    isCompleted: !prev[currentIndex].isCompleted,
                },
            ];
            return newTodos;
        });
    };

    const handleChangeFilter = (filter: IFilter) => {
        setFilter(filter);
    };

    const handleClearCompleted = ()=>{
        setTodos((prev)=> prev.filter(todo=> !todo.isCompleted))
    }

    return (
        <LayoutWrapper className="max-w-screen-lg container my-24 shadow-lg rounded-3xl overflow-hidden">
            <AddTodo onAdd={addTodo} />
            <div className="flex justify-between items-center">
            <Filter filter={filter} onFilterChange={handleChangeFilter} />
            <Button onClick={handleClearCompleted}>Clear Completed</Button>
            </div>
            <TodoList
                todos={filteredTodos}
                onRemove={removeTodo}
                onToggle={toggleTodoStatus}
            />
        </LayoutWrapper>
    );
};

export default App;
