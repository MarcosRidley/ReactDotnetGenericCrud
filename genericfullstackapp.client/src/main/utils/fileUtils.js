export function base64ToBlobPDF(base64) {
    const bytes = atob(base64);
    let { length } = bytes;
    const out = new Uint8Array(length);

    while (length--) {
        out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: 'application/pdf' });
}

export async function convertImageToBase64(image) {
    return new Promise((resolve) => {
        if (image.type && image.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result && typeof reader.result === 'string') {
                    const base64Image = reader.result.split(',')[1];
                    const result = {
                        base64Image,
                        type: image.type,
                        name: image.name
                    };
                    resolve(result);
                }
            };
            reader.readAsDataURL(image);
        } else {
            resolve(image);
        }
    });
}

export async function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export function saveByteArray(reportName, byte) {
    const blob = new Blob([byte], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = reportName;
    link.click();
}

export function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64[0]);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
        const ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }

    return saveByteArray(base64[1], bytes);
}

export function saveByteArrayToSpreadsheet(spreadsheetName, byte) {
    const blob = new Blob([byte], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = spreadsheetName;
    link.click();
}

export function downloadFile(fileByArray, fileName) {
    const file = [fileByArray, fileName];
    base64ToArrayBuffer(file);
}

export function downloadFileExcel(data, fileName) {
    if (data !== null) {
        const blob = new Blob([data], { type: 'application/xlsx' });
        const downloadLink = document.createElement('a');
        downloadLink.download = fileName;
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(blob);
        } else {
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
}

export function viewPdfNewTab(value) {
    const file = new Blob([value], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    const pdfWindow = window.open();
    if (pdfWindow) pdfWindow.location.href = fileURL;
}


export function downloadPdfFile(codeString, nameFile) {
    const linkSource = `data:application/pdf;base64,${codeString}`;
    const downloadLink = document.createElement('a');
    const fileName = nameFile;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

export function downloadAnyFile(
    codeString,
    nameFile,
    type
) {
    const blob = new Blob([codeString], { type: type });
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = nameFile;
    anchor.click();
    URL.revokeObjectURL(anchor.href);
}

export async function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
}

export async function readFileAsText(file) {
    return new Promise ((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = function (event) {
            if (event.target?.result) {
                resolve(event.target.result);
            } else {
                reject(new Error('error on filereader'));
            }
        };
        fileReader.onerror = function () {
            reject(new Error('error on filereader'));
        };
        fileReader.readAsText(file, 'UTF-8');
    });
}

export async function convertFileToJSON(file) {
    const fileContents = await readFileAsText(file);
    const fileJson = JSON.parse(fileContents);
    fileJson.FileName = file.name;
    return fileJson;
}
