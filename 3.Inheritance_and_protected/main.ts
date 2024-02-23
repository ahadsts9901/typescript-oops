class User {

    constructor(
        protected userName: string,
        public age: number
    ) {

        this.userName = userName;
        this.age = age;

    }
}

class Admin extends User {
    isFamily: boolean = true;

    changeUserName(newName: string) {
        this.userName = newName
    }

}