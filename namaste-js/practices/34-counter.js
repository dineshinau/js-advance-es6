function makeCounter(initialValue = 0) {
    // Your implementation
    let count = initialValue
    return {
        increment() {
          count++;
          return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = initialValue;
            return count;
        }
    }
}

const counter = makeCounter(5);
console.log(counter.increment());      // 6
console.log(counter.increment());      // 7
console.log(counter.decrement());      // 6
console.log(counter.reset());      // 5
