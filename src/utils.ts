
interface Foreachable<T> {
    forEach(f: ((e: T) => void)): void;
}

export function asArray<T>(foreachable: Foreachable<T>): T[] {
    const arr: T[] = [];
    foreachable.forEach(e => { arr.push(e); });
    return arr;
}
