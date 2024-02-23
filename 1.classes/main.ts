class User {

    public userName: string
    age: number // public default
    private readonly city: string = "new york" // only accesable in class not outside the class
    readonly #email: string = "" // only accesable in class not outside the class

    constructor(userName: string, age: number) {

        this.userName = userName
        this.age = age

    }
}

const user1 = new User('John', 30)

// console.log(user1);
// user1.city = "london"


class Teacher {

    constructor(
        public userName: string,
        private age: number,
        private email: string
    ) {

        this.userName = userName
        this.age = age
        this.email = email

    }

}