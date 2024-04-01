export function hasValueList(list) {
    return list && list !== null && list.length > 0;
}

export function firstElementList(list) {
    if (list && list !== null && list.length > 0) {
        return list[0];
    }

    return null;
}

export function lastElementList(list) {
    if (list && list !== null && list.length > 0) {
        return list[list.length - 1];
    }

    return null;
}