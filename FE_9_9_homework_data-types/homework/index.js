// 1
function findType(input) {
    return typeof input;
}
// 2
function forEach(arr, callback) {
    for (let i=0; i<arr.length; i++) {
        callback(arr[i]);
    }
}
// 3
function map(arr, callback) {
    let newArray = [];
    forEach(arr, item => newArray.push(callback(item)));
    return newArray;
}
// 4
function filter(arr, callback) {
    let newArray = [];
    forEach(arr, item => {
        if (callback(item)) {
            newArray.push(item)
        }
    });
    return newArray;
}
// 5
function getAdultAppleLovers(arr) {
    let newArray = filter(arr, item => {
        return item.age > 18 && item.favoriteFruit === 'apple'
    });
    map(newArray, item => {
        return item.name;
    })
}
// 6
function keys(obj) {
    let keyArrays = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            keyArrays.push(prop)
        }
    }
    return keyArrays;
}
// 7 
function value(obj) {
    let valueArray = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            valueArray.push(obj[prop])
        }
    }
    return valueArray;
}
// 8 
function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
