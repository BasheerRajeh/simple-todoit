import { Dispatch, SetStateAction, useState } from "react";

function useLocalStorage<T>(
    key: string,
    defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    localStorage.setItem(key, JSON.stringify(value));

    return [value, setValue];
}

export default useLocalStorage;
