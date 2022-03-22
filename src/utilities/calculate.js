

const add = (first, second) => {
    return first + second;
}

const diff = (first, second) => {
    const diff = first - second;
    if (diff > 0) {
        return diff;
    }
    else {
        return diff * -1;
    }
}

const multiply = (first, second) => {
    return first * second;
}

// export default add;
export { add, diff, multiply };