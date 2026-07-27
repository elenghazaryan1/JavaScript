
function toUpperCase(str) {
    let result = "";

    for (let i = 0; str[i] !== undefined; i++) {
        let code = str.charCodeAt(i);

        if (code >= 97 && code <= 122) {
            code -= 32;
        }

        result += String.fromCharCode(code);
    }

    return result;
}

console.log(toUpperCase("hello world"));