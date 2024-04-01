export function getFirstWord(text) {
    let firstWord = '';

    if (text) {
        firstWord = text.replace(/(\w+)\s.*/, '$1');
    }

    return firstWord;
}

export function firstLetterToUpperCase(text) {
    const firstLetter = text.charAt(0).toUpperCase();
    const rest = text.slice(1);
    return firstLetter + rest;
}

export function removeNumbersOfString(text) {
    const regexNumber = /[0-9]/g;
    return text.replace(regexNumber, '');
}


export function isValidCpf(cpf) {
    const cpfFormated = cpf.replace(/[^0-9]/g, '');
    let sum = 0;
    let rest = 0;

    if (cpfFormated.length !== 11) return false;

    if (cpfFormated === '00000000000') return false;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpfFormated.substring(i - 1, i), 10) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpfFormated.substring(9, 10), 10)) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpfFormated.substring(i - 1, i), 10) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cpfFormated.substring(10, 11), 10)) return false;

    return true;
}

export async function copyToClipboardText(text) {
    return navigator.clipboard.writeText(text);
}

export function capitalize(name) {
    if (name === '') {
        return '';
    }
    return name[0].toUpperCase() + name.substr(1);
}

export function uppercaseFirstLetter(str) {
    const words = str.split(' ');

    const transformedWords = words.map((word, index) => {
        if (index === 0) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
    });

    return transformedWords.join(' ');
}



export function convertStringForBoolean(
    stringValue
) {
    if (stringValue === null || stringValue === undefined) {
        return false;
    }
    return stringValue.trim() === '1' || stringValue.trim() === 'True';
}

export function characterDelimiter(value, qtyCharacter) {
    if (value.length < qtyCharacter) {
        const rest = qtyCharacter - value.length;
        let sizeText = '';
        for (let index = 0; index < rest; index++) {
            sizeText = sizeText + '0';
        }
        return sizeText + value;
    } else {
        if (value.length === qtyCharacter) {
            return value;
        }
        const newValue = value.slice(1);
        return newValue;
    }
}

export function removeGuidOfString(text) {
    const regexGuid = /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/;
    return text.replace(regexGuid, '');
}

export function hasValueString(text) {
    if (text && text !== null && text !== '') {
        return true;
    }

    return false;
}

export function splitExtensionOfFile(fileByteArray) {
    return [
        fileByteArray.slice(0, fileByteArray.lastIndexOf('.')),
        fileByteArray.slice(fileByteArray.lastIndexOf('.'))
    ];
}

