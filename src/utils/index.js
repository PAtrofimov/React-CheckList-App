export function arrayNumbers(size, first) {
    return Array.from(new Array(size), (el, i) => 1 + first)
}

export function currentYear() {
    return new Date().getFullYear();
}