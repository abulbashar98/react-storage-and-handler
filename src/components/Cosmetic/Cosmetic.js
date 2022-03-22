import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic


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


    // option 1
    const addToCartWithParameter = () => {
        addToCart(id)
    }

    const addToCart = (id) => {
        console.log('Item id', id)
    }


    // option 2: write an anonymous Arrow function as Wrapper in Handler and target function inside it...... In that wrapper only runs when event occurs

    return (
        <div className='product'>
            <h2>Buy This Product: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Product ID: {id}</h4>
            {/* <button onClick={addToCartWithParameter}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};
export default Cosmetic;

