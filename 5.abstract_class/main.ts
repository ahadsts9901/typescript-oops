abstract class User {
    constructor(
        public email: string,
        public password: string,
    ) {
        this.email = email;
        this.password = password;
    }

    abstract getEmail(): void // you have to describe it in child class

    getPassword(): string { // you have to describe it here
        return this.password
    }

}

class Teacher extends User {

    constructor(
        public email: string,
        public password: string,
    ) {
        super(email, password);
    }

    getEmail(): void {
        console.log(this.email);
    }

}

const user1 = new Teacher("john@gmail.com", "123")

console.log(user1.getPassword());