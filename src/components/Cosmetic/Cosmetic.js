import React from 'react';
import { removeFromCart } from '../../utilities/fake-database';
import './Cosmetic.css'

const Cosmetic = (props) => {




    // Scenario 1: When we try to pass parameters Like this in JSX code it automatically calls the function addToCart() because it gets compiled to JS......

    /*
    const addToCart = (id) => {
        console.log('Item id', id)
    }
    
    return (
        <div className='product'>
            <h2>Buy This Product: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Product ID: {id}</h4>
            <button onClick={addToCart(id)}>Add to Cart</button>
        </div>
    );
    };
    */


    // Scenario 2: To solve this Problem we are going to use a wrapper Arrow function in Event Handler To Pass Parameters to the Main Targeted Function inside the Wrapper function.......


    const { name, price, id } = props.cosmetic;

    // option 1
    // const addToCartWithParameter = () => {
    //     addToCart(id)
    // }




    // Add Single Item key, and Change value as Quantity.....
    /*
    const addToCart = (id) => {
      // console.log('Item id', id)
      const quantity = localStorage.getItem(id);
      // console.log(quantity);
      if (quantity) {
          // const newQuant = quantity + 1;
          const newQuant = parseInt(quantity) + 1;
          localStorage.setItem(id, newQuant)
      }
      else {
          localStorage.setItem(id, 1)
      }
  }
*/


    // Add multiple Items in Local Storage as Objects.... And Change their Values like Quantities on Event.....

    const addToCart = id => {
        let shoppingCart = {};
        // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


        // get cart and add More Items in them if exists....
        const storedCart = localStorage.getItem('shopping-cart')
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart)
        }




        // Check for Value existence in Shopping cart object.... if exists change the value/quantity by +1...Else the the value/quantity to 1;
        const quantity = shoppingCart[id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        }
        else {
            shoppingCart[id] = 1;
        }


        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }




    // option 2: write an anonymous Arrow function as Wrapper in Handler and target function inside it...... In that wrapper only runs when event occurs

    return (
        <div className='product'>
            <h2>Buy This Product: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Product ID: {id}</h4>
            {/* <button onClick={addToCartWithParameter}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
        </div>
    );
};
export default Cosmetic;

