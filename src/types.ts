export interface ITodo {
    id: string;
    title: string;
    isCompleted: boolean;
}

export type IFilter = "all" | "completed" | "uncompleted";
