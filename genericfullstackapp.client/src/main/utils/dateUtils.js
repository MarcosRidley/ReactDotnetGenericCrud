export function getUtcNow() {
    const dateNow = new Date();
    return new Date(
        dateNow.getUTCFullYear(),
        dateNow.getUTCMonth(),
        dateNow.getUTCDate(),
        dateNow.getUTCHours(),
        dateNow.getUTCMinutes(),
        dateNow.getUTCSeconds()
    );
}


export function convertStringToDate(dateOrString) {
    if (typeof dateOrString === 'string') {
        return new Date(dateOrString);
    }
    return dateOrString;
}

export function getDateWithoutTime(inputDate) {
    let date = new Date();
    if (inputDate) {
        date = convertStringToDate(inputDate);
    }
    date.setHours(0, 0, 0, 0);
    return date;
}

export function convertLocalDateToUTCDate(date) {
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
}

export function removeSecAndMsOfDate(date) {
    const newDate = date.setHours(date.getHours(), date.getMinutes(), 0, 0);
    return newDate;
}

export function convertMillisecondsInDate(milliseconds) {
    const convertedDate = new Date(1970, 1, 1).setMilliseconds(milliseconds);
    return convertedDate;
}

export function convertDateInMilliseconds(date) {
    const convertedMilliseconds =
        date - new Date(1970, 1, 1).getMilliseconds();
    return convertedMilliseconds;
}


export function validateMinDate(date) {
    if (date && typeof date === 'string' && date === '0001-01-01T00:00:00') {
        return null;
    }
    return date;
}

