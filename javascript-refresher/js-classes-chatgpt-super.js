// Super keyword
class User {
    constructor(name) {
        this.name = name;
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}

const admin = new Admin("Dinesh", "Administrator");

console.log(admin.name); //Dinesh
console.log(admin.role); // Administrator
