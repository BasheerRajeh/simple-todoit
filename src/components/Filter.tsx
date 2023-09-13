import { Filter as FilterType } from "../types";
import Button from "./Button";

interface FilterProps {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}
const filterStyle = "border-green-500 hover:border-green-700";

const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {
    return (
        <div className="flex flex-wrapfi gap-2 p-3">
            <Button
                varient="outlined"
                className={filter === "all" ? filterStyle : ""}
                onClick={() => onFilterChange("all")}
            >
                all
            </Button>
            <Button
                varient="outlined"
                className={filter === "completed" ? filterStyle : ""}
                onClick={() => onFilterChange("completed")}
            >
                completed
            </Button>
            <Button
                varient="outlined"
                className={filter === "uncompleted" ? filterStyle : ""}
                onClick={() => onFilterChange("uncompleted")}
            >
                uncompleted
            </Button>
        </div>
    );
};

export default Filter;
