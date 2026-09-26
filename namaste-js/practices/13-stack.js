class Stack {
    items;
    constructor() {
        // Initialize your stack
        this.items = [];
    }

    push(a) {
        // Add element to the top
        this.items.push(a);
        return this.items.length;
    }

    pop() {
        // Remove and return top element
        return this.items.pop();
    }

    peek() {
        // Return top element without removing
        return this.items[this.items.length -1];
    }

    isEmpty() {
       return this.items.length < 1;
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = [];
        return this.items;
    }
}

const stack = new Stack();
console.log(stack.isEmpty()); //true
console.log(stack.push(10)); // 1
console.log(stack.push(20)); // 2
console.log(stack.push(30)); // 3
console.log(stack.size()); // 3
console.log(stack.peek()); // 30
console.log(stack.pop()) //30
console.log(stack.peek()); // 20
console.log(stack.clear());
console.log(stack.isEmpty()); //true

//For the purpose of user debugging.

