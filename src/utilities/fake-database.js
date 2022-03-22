

const removeFromCart = id => {
    // console.log('removing', id)
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}


const clearLocalStorage = () => {
    localStorage.removeItem('shopping-cart');
}


/*-------------- *\
     Reduce
\*-----------------*/

// THere 2 ways of adding Array of numbers.....

// 1. Using Simple For loop... Example:

/*
const numbers = [12, 43, 54, 23, 54, 56]
let sum = 0;
for (const number of numbers) {
    sum = sum + number;
}
console.log(sum);
*/


// 2. The FANCY way of adding elements of a number is adding them by reduce().......
// Note: reduce() function takes 2 parameters.. 1. is a callBack function.....
// 2nd is the initial value....



const numbers = [12, 43, 54, 23, 54, 56];

const sumReducerForNumbers = (previousValue, currentValue) => previousValue + currentValue;
const total = numbers.reduce(sumReducerForNumbers, 0)
// console.log(total);



// Adding values in An Array of Objects.....
const products = [
    { name: 'laptop', id: 1, price: 520 },
    { name: 'laptop', id: 1, price: 520 },
    { name: 'laptop', id: 1, price: 520 },
    { name: 'laptop', id: 1, price: 520 },
    { name: 'laptop', id: 1, price: 520 },
    { name: 'laptop', id: 1, price: 520 }
]

// const productsPriceReducer = (previous, current) => previous + current.price;
// const totalProductPrice = products.reduce(productsPriceReducer, 0)
// console.log(totalProductPrice);

// shortCut
const getTotalPrice = products => {
    // return products.reduce((previous, current) => previous + current.price, 0);
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}




export { removeFromCart, getTotalPrice as totalPrice }