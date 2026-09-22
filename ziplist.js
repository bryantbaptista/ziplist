"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce((result, item, index) => {
        if (index < list2.length) {
            result.push(item, list2[index]);
        }
        return result;
    }, []);
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
