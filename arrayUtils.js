// implement map with forEach
// forEach invokes a function on each value but does not return anything
const forEach = (array, fn) => {
    for (const value of array) {
        fn(value);
    }
}

// map returns a new array with the results of 
// calling a provided function on every element in the calling array
const map = (array,fn) => {
    let results = []
    for(const value of array)
        results.push(fn(value))
    return results;
}

// filter returns a new array with all elements that pass the test implemented by the provided function
const filter = (array, fn) => {
    let results = []
    for(const value of array)
        (fn(value)) ? results.push(value) : undefined
    return results;
}

// flatten nested arrays
const concatAll = (array,fn) => {
    let results = []
    for(const value of array)
       results.push.apply(results, value);
    return results;
}

// reduce returns a single value by calling a provided function for each element in the array
const reduce = (array,fn,initialValue) => {
    let accumlator;
    if(initialValue != undefined)
        accumlator = initialValue;
    else
        accumlator = array[0];
    if(initialValue === undefined)
        for(let i=1;i<array.length;i++)
                accumlator = fn(accumlator,array[i])
    else
        for(const value of array)
            accumlator = fn(accumlator,value)
    return accumlator
}

const zip = (leftArr,rightArr,fn) => {
    let index, results = [];
    for(index = 0;index < Math.min(leftArr.length, rightArr.length);index++)
            results.push(fn(leftArr[index],rightArr[index]));
    return results;
}

const arrayUtils = {
    forEach: forEach,
    map: map,
    filter,
    concatAll,
    reduce,
    zip: zip
};

export { arrayUtils };