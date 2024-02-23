// not completed

interface Food {
    dishName: string,
    price: number,
    isSweet: boolean
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

class Pizza implements Food {
    constructor(
        public dishName: string,
        public price: number,
        public isSweet: boolean,
    ) {
        this.dishName = "Pizza";
        this.price = 15;
        this.isSweet = false;
    }
}