interface Database {
    connection: string,
    password: string,
    userName: string
}

function fun<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1, val2
    }
}

// fun(12, "13.9")

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    title: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}