// chapter 6: currying and partial application

// arity is the number of arguments the function takes

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

// currying

// manually curry a function
const addCurried = x => y => x + y;

// curry any binary function (es5 format)
const curryBinary = (binaryFunction) => {
    return function(firstArg) {
        return function(secondArg) {
            return binaryFunction(firstArg, secondArg);
        }
    }
}

const autoCurriedAdd = curryBinary(add);

// curry Function Converting n arg Function to Unary Function
let curry =(fn) => {
    if(typeof fn!=='function'){
        throw Error('No function provided');
    }
    return function curriedFn(...args){
      if(args.length < fn.length){
        return function(){
          return curriedFn.apply(null, args.concat( [].slice.call(arguments) ));
        };
      }
      return fn.apply(null, args);
    };
};



const multiply = (x,y,z) => x * y * z;

// curry(multiply)(1)(2)(3) this works

const multiply2 = (...args) => args.reduce((a,b) => a * b);
// curry(multiply2)(1)(2)(3)(4)(5)(6)//(720) does not take enough arguments

const multiplyAny = num1 => {
    return (num2) => {
        if(!num2) {
            return num1;
        }
        return multiplyAny(num1 * num2);
    }
}

// console.log(multiplyAny(1)(2)(3)(4)(5)()); // this is dope, but requires the empty invocation ()

// logger function
const loggerHelper = (mode,initialMessage,errorMessage,lineNo) => {
    if(mode === "DEBUG")
            console.debug(initialMessage,errorMessage + "at line: " + lineNo)
    else if(mode === "ERROR")
            console.error(initialMessage,errorMessage + "at line: " + lineNo)
    else if(mode === "WARN")
            console.warn(initialMessage,errorMessage + "at line: " + lineNo)
    else
            throw "Wrong mode"
};






