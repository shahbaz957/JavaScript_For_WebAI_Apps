function memoize(fn) {
  cache = new Map();
  return function (arg) {
    if (cache.has(arg)) return cache.get(arg);
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

function slowDouble(arg) {
  return arg * 2;
}

const memoized = memoize(slowDouble);
const start1 = Date.now();
console.log(memoized(2));
const end1 = Date.now();
console.log("Time for First Function Call -> ", end1 - start1);
const start2 = Date.now();
console.log(memoized(2));
const end2 = Date.now();
console.log("Time for Second Function Call -> ", end2 - start2);
