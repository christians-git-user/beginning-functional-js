// chapter 6: currying and partial application

// unary fn
const identity = x => x;

// binary fn
const add = (x, y) => x + y;

// variadic fn
const sum = (...args) => args.reduce((a, b) => a + b, 0);

const variadic = (a, ...variadic) => {
    console.log(a)
    console.log(variadic)
}


