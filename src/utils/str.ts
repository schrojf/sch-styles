/**
 * Returns the part of the string after the first occurrence of a given value.
 */
export const after = (subject: string, search: string): string => {
    const index = subject.indexOf(search);
    return index === -1 ? '' : subject.slice(index + search.length);
};

/**
 * Returns the part of the string before the first occurrence of a given value.
 */
export const before = (subject: string, search: string): string => {
    const index = subject.indexOf(search);
    return index === -1 ? '' : subject.slice(0, index);
};

/**
 * Returns the part of the string after the last occurrence of a given value.
 */
export const afterLast = (subject: string, search: string): string => {
    const index = subject.lastIndexOf(search);
    return index === -1 ? '' : subject.slice(index + search.length);
};

/**
 * Returns the part of the string before the last occurrence of a given value.
 */
export const beforeLast = (subject: string, search: string): string => {
    const index = subject.lastIndexOf(search);
    return index === -1 ? '' : subject.slice(0, index);
};

/**
 * Extracts a substring between two given substrings (first match).
 */
export const between = (subject: string, from: string, to: string): string => {
    const start = subject.indexOf(from);
    const end = subject.indexOf(to, start + from.length);
    return start === -1 || end === -1
        ? ''
        : subject.slice(start + from.length, end);
};

/**
 * Extracts the first substring found between two values.
 * Same as `between`.
 */
export const betweenFirst = between;

/**
 * Converts special characters to ASCII equivalents.
 */
export const ascii = (value: string): string => {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

/**
 * Converts a string to camelCase.
 */
export const camel = (value: string): string => {
    return value
        .replace(/[_\-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
        .replace(/^[A-Z]/, (m) => m.toLowerCase());
};

/**
 * Converts a string to kebab-case.
 */
export const kebab = (value: string): string => {
    return value
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[_\s]+/g, '-')
        .toLowerCase();
};

/**
 * Converts a string to snake_case.
 */
export const snake = (value: string): string => {
    return value
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[-\s]+/g, '_')
        .toLowerCase();
};

/**
 * Converts a string to StudlyCase.
 */
export const studly = (value: string): string => {
    return value
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
        .replace(/^[a-z]/, (m) => m.toUpperCase());
};

/**
 * Checks whether a string is a valid UUID.
 */
export const isUuid = (value: string): boolean => {
    const regex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return regex.test(value);
};

/**
 * Limits the string to a given length and appends a suffix if truncated.
 */
export const limit = (
    value: string,
    limit: number,
    end: string = '...',
): string => {
    return value.length <= limit ? value : value.slice(0, limit) + end;
};

/**
 * Limits the string to a given number of words and appends a suffix if truncated.
 */
export const words = (
    value: string,
    words: number = 100,
    end: string = '...',
): string => {
    const wordArray = value.trim().split(/\s+/);
    return wordArray.length <= words
        ? value
        : wordArray.slice(0, words).join(' ') + end;
};

/**
 * Masks a portion of a string with a repeated character.
 */
export const mask = (
    string: string,
    character: string,
    index: number,
    length: number | null = null,
): string => {
    const end = length === null ? string.length : index + length;
    const masked = character.repeat(Math.max(end - index, 0));
    return string.slice(0, index) + masked + string.slice(end);
};

/**
 * Replaces occurrences of a given value in a string sequentially using values from an array.
 */
export const replaceArray = (
    search: string,
    replace: string[],
    subject: string,
): string => {
    let result = subject;
    replace.forEach((rep) => {
        result = result.replace(search, rep);
    });
    return result;
};

/**
 * Counts the number of times a substring appears in a string.
 */
export const substrCount = (
    haystack: string,
    needle: string,
    offset: number = 0,
    length: number | null = null,
): number => {
    const substring = haystack.slice(
        offset,
        length === null ? undefined : offset + length,
    );
    let count = 0;
    let pos = 0;
    while ((pos = substring.indexOf(needle, pos)) !== -1) {
        count++;
        pos += needle.length;
    }
    return count;
};

/**
 * Replaces multiple substrings in a string using a replacement map.
 */
export const swap = (map: Record<string, string>, subject: string): string => {
    let result = subject;
    for (const [search, replacement] of Object.entries(map)) {
        result = result.replace(new RegExp(search, 'g'), replacement);
    }
    return result;
};

/**
 * Splits a string by uppercase letters.
 */
export const ucsplit = (string: string): string[] => {
    return string.split(/(?=[A-Z])/);
};

/**
 * Repeats a given string a specified number of times.
 */
export const repeat = (value: string, times: number): string => {
    if (times < 0) throw new Error('Repeat count must be non-negative.');
    return value.repeat(times);
};
