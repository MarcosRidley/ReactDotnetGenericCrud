export function roundNumber(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function formatDecimal(number) {
    const numberString = number.toString();
    return parseFloat(numberString).toFixed(2);
}

export function formatDecimalWithPoint(number) {
    let numberString = number.toString();
    numberString = numberString.replace(',', '.');
    return Number(numberString);
}

export function formatTwoDecimalPlaces(number) {
    let numberString = number.toString();
    numberString = numberString.replace(',', '.');
    const numberArray = numberString.split('.');
    if (numberArray.length == 1) {
        numberString += '00';
    } else if (numberArray[numberArray.length - 1].length == 1) {
        numberString += '0';
    }
    numberString = numberString.replace('.', '');
    numberString = numberString.replace(/(\d{1})(\d{5})$/, '$1.$2');
    numberString = numberString.replace(/(\d{1})(\d{2})$/, '$1,$2');
    return numberString;
}

export function formatDecimalToString(v) {
    let vstring = v.toString();
    vstring = vstring.replace(',', '.');
    const vRealarray = vstring.split('.');

    if (vRealarray.length == 1) {
        vstring += '00';
    } else if (vRealarray[vRealarray.length - 1].length == 1) {
        vstring += '0';
    }

    vstring = vstring.replace('.', '');
    vstring = vstring.replace(/(\d{1})(\d{8})$/, '$1.$2');
    vstring = vstring.replace(/(\d{1})(\d{5})$/, '$1.$2');
    vstring = vstring.replace(/(\d{1})(\d{2})$/, '$1,$2');

    return vstring;
}

export function formatDecimalCommaToDot(v) {
    const vString = v.toString();
    const vResult = Number(vString.replace(',', '.'));
    return vResult;
}

export function calculateAverage(list) {
    let average = 0;
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    average = total / list.length;

    return average;
}

export function formatFloatToString(v) {
    if (v || v === 0) {
        let vString = v.toString();
        vString = parseFloat(vString).toFixed(2);
        vString = vString.replace('.', '').replace(',', '');
        vString = vString.replace(/(\d{1})(\d{8})$/, '$1.$2');
        vString = vString.replace(/(\d{1})(\d{5})$/, '$1.$2');
        vString = vString.replace(/(\d{1})(\d{2})$/, '$1,$2');
        return vString;
    }
    return v;
}

export function parseStringToFloat(v = null) {
    if (v) {
        return parseFloat(v.replace(' ', '').replace('.', '').replace(',', '.'));
    }
    return 0;
}

export function convertToNumber(value) {
    let numberValue;
    try {
        numberValue = Number(value);
    } catch (error) {
        throw new Error(error);
    }
    return numberValue;
}

export function calculateAge(birthDate, deathDate = null) {
    const today = new Date();
    const birthDateValue = new Date(birthDate);
    const deathDateValue = deathDate !== null ? new Date(deathDate) : null;
    let age;

    if (deathDateValue == null) {
        let yearsDiff = today.getFullYear() - birthDateValue.getFullYear();
        const monthsDiff = today.getMonth() - birthDateValue.getMonth();
        const daysDiff = today.getDate() - birthDateValue.getDate();

        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            yearsDiff -= 1;
        }

        age = yearsDiff;
    } else {
        let yearsDiff = deathDateValue.getFullYear() - birthDateValue.getFullYear();
        const monthsDiff = deathDateValue.getMonth() - birthDateValue.getMonth();
        const daysDiff = deathDateValue.getDate() - birthDateValue.getDate();

        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            yearsDiff -= 1;
        }

        age = yearsDiff;
    }

    return age;
}

export function formatNumberWithPadding(num) {
    return num.toString().padStart(2, '0');
}

export function formatValueByLocaleAndCurrency(
    numberValue,
    locale,
    currency
) {
    return numberValue.toLocaleString(locale, {
        style: 'currency',
        currency
    });
}

export function formatValueByLocale(value, locale) {
    return value.toLocaleString(locale);
}

// Currency Functions

export function currencyToNumber(value){
    const convertValue = value.replace(/[^\d.-]/g, '');
    return convertValue === '' ? null : parseFloat(convertValue);
}



export function formatAsPx(value) {
    return value + 'px';
}

export function calculateVolume(
    height,
    width,
    depth
) {
    return (height * width * depth) / 1000;
}

export function ipToNumber(ip) {
    const segments = ip.split('.').map(Number);
    return (
        segments[0] * 256 ** 3 +
        segments[1] * 256 ** 2 +
        segments[2] * 256 +
        segments[3]
    );
}

export function formatPercentage(number) {
    return `${number}%`;
}
export function addLeadingZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

