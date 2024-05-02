import { IValue } from "./types";

function handleObjectMethod(value: IValue) {
    if (Object.prototype.toString.call(value) === "[object Object]") {
        if (Object.keys(value as object).length === 0) return true;
        return false;
    }

    if (value instanceof Boolean) return false;
    else if (value instanceof Map || value instanceof Set) {
        if (value.size === 0) return true;
        return false;
    } else if (value instanceof String) {
        let trimmedVal = value.valueOf().trim();
        if (!trimmedVal) return true;
        return false;
    }

    // null, undefined
    if (!value) return true;
    return false;
}

export const isEmpty = (value: Partial<IValue>) => {
    switch (typeof value) {
        case "boolean":
            return false;
        case "function":
            return false;
        case "number":
            return false;
        case "string":
            let trimmedVal = (value as string).trim();
            if (!trimmedVal) return true;
            return false;
        case "symbol":
            let trimmedValue = (value as any).description.trim();
            if (!trimmedValue) return true;
            return false;
        default:
            if (value && Array.isArray(value)) {
                if (value.length === 0) return true;
                return false;
            }
            return handleObjectMethod(value);
    }
};

