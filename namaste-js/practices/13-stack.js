class Stack {
    constructor(items) {
        // Initialize your stack
        this.items = items;
        console.log('Construtor called: '+this.items);
    }

    push(a) {
        // Add element to the top
        this.items.push(a);
        console.log(this.items.length);
    }

    pop(b) {
        // Remove and return top element
        console.log(this.items[this.items.length -1]);
        this.items.pop();
    }

    peek() {
        // Return top element without removing
        console.log(this.items[this.items.length -1]);
    }

    isEmpty() {
        console.log( this.items.length < 1);
    }

    size() {
        console.log(this.items.length)
    }

    clear() {
        this.items = [];
        console.log(this.items);
    }
}
let items = [];
const stack = new Stack(items);
stack.isEmpty(); //true
stack.push(10); // 1
stack.push(20); // 2
stack.push(30); // 3
stack.size(); // 3
stack.peek(); // 30
stack.pop() //30
stack.peek(); // 20
stack.clear()
stack.isEmpty(); //true

//For the purpose of user debugging.

