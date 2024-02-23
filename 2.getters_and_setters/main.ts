class Student {

    private _courseCount = 1

    constructor(public userName: string, public age: number) {
        this.userName = userName;
        this.age = age;
    }

    get getAppleUserName(): string {
        return `apple-${this.userName}`
    }

    set setAppleUserName(value: string) {
        this.userName = `apple-${value}`
    }

    get getCoursecount(): number {
        return this._courseCount
    }

    set setCourseCount(count: number) {
        if (count <= 1) {
            throw new Error('course count should be more than 1')
        }
        this._courseCount = count
    }

    private deleteToken() {
        console.log('token deleted')
    }

}

const student1 = new Student("shahzaib", 14)

// console.log(student1.deleteToken()); // throw error because deleteToken() is private
