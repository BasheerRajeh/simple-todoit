import { IFilter } from "../types";

interface FilterProps {
    onFilterChange: (filter: IFilter) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    return (
        <div>
            <button onClick={() => onFilterChange("all")}>all</button>
            <button onClick={() => onFilterChange("completed")}>
                completed
            </button>
            <button onClick={() => onFilterChange("uncompleted")}>
                uncompleted
            </button>
        </div>
    );
};

export default Filter;
