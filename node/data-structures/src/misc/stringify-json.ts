/*
    JSON.stringify({a:'b', c: { f: 45}, d: [3,4,5]})
    "{"a":"b","c":{"f":45},"d":[3,4,5]}"

    JSON.stringify({a:'b', c: { f: 45}, d: [3,4,5], e: undefined})
    "{"a":"b","c":{"f":45},"d":[3,4,5]}"

    JSON.stringify({a:'b', c: { f: 45}, d: [3,4,5], e: null})
    "{"a":"b","c":{"f":45},"d":[3,4,5],"e":null}"
*/

export function stringifyJson<T>(obj: T): string | undefined {
    if (obj === null) {
        return 'null';
    }

    if (obj === undefined) {
        return undefined;
    }

    if (/number|symbol|boolean/.test(typeof obj) || obj instanceof Date) {
        return obj.toString();
    }

    if (/string/.test(typeof obj) || obj instanceof Date) {
        return `"${obj.toString()}"`;
    }

    if (obj instanceof Array) {
        const arrResult = [];
        for (const val of obj) {
            arrResult.push(stringifyJson(val));
        }
        return `[${arrResult.join(',')}]`;
    }

    const result = [];
    const keys = Object.keys(obj);
    keys.forEach((key: string) => {
        const stringifiedObj = stringifyJson(obj[key]);
        if (stringifiedObj) {
            result.push(`"${key}":${stringifiedObj}`);
        }
    });
    return `{${result.join(',')}}`;
}
