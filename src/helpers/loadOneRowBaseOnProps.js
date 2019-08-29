export function loadOneRowBaseOnProps(colProps) {
    let arr = [];
    for (let item of colProps) {
        arr.push(item.label);
    }
    return arr;
}