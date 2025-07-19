const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

export const setLocalStorage = (key: string, value: string) => {
    if (isBrowser) {
        localStorage.setItem(key, value);
    }
}

export const getLocalStorage = (key: string): string | null => {
    if (isBrowser) {
        return localStorage.getItem(key);
    }
    return null;
}

export const removeLocalStorage = (key: string) => {
    if (isBrowser) {
        localStorage.removeItem(key);
    }
}

export const clearLocalStorage = () => {
    if (isBrowser) {
        localStorage.clear();
    }
}