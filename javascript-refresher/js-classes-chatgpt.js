class User {
    name;
    email;
    constructor() {
        console.log("Constructor called");
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}
const user = new User();
console.log(user instanceof User);
user.name = 'Dinesh'
user.login()

class BankAccount {
    #balance = 0;
    name = 'Dinesh'
    deposit(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());
console.log(account.name); // Dinesh
console.log(account.balance); // undefined, because #balance is private


// Private methods
class PUser {
    #validateEmail(email) {
        return email.includes("@");
    }

    register(email) {
        if (!this.#validateEmail(email)) {
            console.log("Invalid email");
            return;
        }

        console.log(`User ${email} registered`);
    }
}
const puser = new PUser();
puser.register('dineshinau@gmail.com') // User dineshinau@gmail.com registered.
//puser.#validateEmail("test@example.com"); //Uncaught SyntaxError: Private field '#validateEmail' must be declared in an enclosing class (at js-classes-chatgpt.js:52:5)

// Private and Public both together in one class.

class PPUser {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(password) {
        if (this.#checkPassword(password)) {
            console.log("Login successful");
        } else {
            console.log("Invalid password");
        }
    }

    #checkPassword(password) {
        return this.#password === password;
    }
}

const ppuser = new PPUser(
    "dinesh",
    "secret123"
);

ppuser.login("secret123"); // Login successful
//ppuser.#password; //Uncaught SyntaxError: Private field '#password' must be declared in an enclosing class (at js-classes-chatgpt.js:83:7)

// Static method
class Calculator {
    static add(a, b) {
        return a + b;
    }
}
console.log(Calculator.add(4,5)); // 9

// Static properties.
class SUser {
    static count = 0;

    constructor(name) {
        this.name = name;
        SUser.count++;
    }
}

const user1 = new SUser("Dinesh");
const user2 = new SUser("Rahul");
console.log(SUser.count); // 2

console.log(user1.count); // undefined
console.log(user2.count); // undefined

// Inheritance
class IUser {
    constructor(name) {
        this.name = name;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}

class Admin extends IUser {
    deleteUser() {
      console.log(`User ${this.name} deleted`);
    }
}
const admin = new Admin("Dinesh");
admin.login();
admin.deleteUser();


