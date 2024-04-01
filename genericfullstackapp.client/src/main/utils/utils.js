export function removeNulls(object) {
    if (object === null) {
        return undefined;
    }
    if (typeof object === 'object') {
        for (const key in object) {
            object[key] = removeNulls(object[key]);
        }
    }
    return object;
}

export function getKeyOrder(arrayOfKeyValue) {
    let orderedArray = [];
    if (arrayOfKeyValue) {
        orderedArray = arrayOfKeyValue.sort((a, b) =>
            a.key > b.key ? 1 : b.key > a.key ? -1 : 0
        );
    }

    return orderedArray;
}

export function isLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

export function scrollIntoViewDown(inputElement) {
    if (inputElement) {
        inputElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}

export function formatUri(uri) {
    const prefixHttps = 'https://';
    const prefixHttp = 'http://';
    if (uri) {
        uri = uri.trim();

        if (!uri.startsWith(prefixHttps) && !uri.startsWith(prefixHttp)) {
            uri = `${prefixHttp}${uri}`;
        }

        return uri;
    }

    return '';
}

export function debounce(func, delay) {
    let timeout;
    return function (...args) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, delay);
    };
}

export function getDefaultOptionDrop(optionsArray, selectedKey = null) {
    if (optionsArray !== null && optionsArray.length > 0) {
        if (selectedKey) {
            return optionsArray.find(option => option.key === selectedKey) || null;
        }
        if (optionsArray.length === 1) return optionsArray[0];
    }
    return null;
}

export function haveIgnoreElement(htmlElement) {
    while (htmlElement) {
        const containsIgnore = htmlElement.classList.contains('ignore-click');
        if (containsIgnore) {
            return htmlElement;
        }
        htmlElement = htmlElement.parentElement;
    }
    return null;
}


export function isNullUndefined(value) {
    return value === null || value === undefined;
}


export function openNewTab(screen) {
    window.open(`#${screen}`, '_blank');
}
export function openNewTabExternalLink(url) {
    window.open(url, '_blank');
}



export function clearCache() {
    window.caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
            window.caches
                .open(cacheName)
                .then(cache => {
                    return cache.keys();
                })
                .then(requests => {
                    requests.forEach(() => {
                        window.caches.delete(cacheName);
                    });
                });
        });
    });
}

export const isDiffZero = value => value !== 0 && !isNullUndefined(value);



export function buildUrlQueryParams(route, params) {
    const urlParams = Object.entries(params)
        .map(([key, value]) =>
            isNullUndefined(value)
                ? false
                : `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        )
        .filter(Boolean)
        .join('&');

    return `${route}${urlParams ? `?${urlParams}` : ''}`;
}

export function getFirstSelectedItem(defaultValue = null, list = []) {
    if (list.length > 0) {
        return list[0];
    }
    return defaultValue;
}

export function handleEnterKey(event, callback) {
    if (event.key === 'Enter') {
        event.preventDefault();
        callback();
    }
}

export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function getObjectSize(obj) {
    return Object.keys(obj).length;
}

export function getOrdinalSuffix(number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

export function getObjectValueByPath(obj, path) {
    return path.split('.').reduce((o, i) => o[i], obj);
}

export function setObjectValueByPath(obj, path, value) {
    const keys = path.split('.');
    let i = 0;
    for (; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
    }
    obj[keys[i]] = value;
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateRandomString(length) {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

