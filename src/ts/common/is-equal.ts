export function isEqual<T extends object, K extends T>(obj1: T, obj2: K) {
    const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];

        if (obj1[prop as keyof typeof obj1] !== obj2[prop as keyof typeof obj1]) {
            return false;
        }
    }

    return true;
}
