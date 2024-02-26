// implement only use in interface

interface Food {
    dishName: string,
    price: number,
    isSweet: boolean
}

interface IsFried {
    isFried: boolean,
}

class Fish implements Food {

    constructor(
        public dishName: string,
        public price: number,
        public isSweet: boolean,
    ) {
        this.dishName = "Fish";
        this.price = 10;
        this.isSweet = false;
    }

}

class Pizza implements Food, IsFried {
    constructor(
        public dishName: string,
        public price: number,
        public isSweet: boolean,
        public isFried: boolean,
    ) {
        this.dishName = "Pizza";
        this.price = 15;
        this.isSweet = false;
        this.isFried = false;
    }
}