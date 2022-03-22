import React from 'react';
import { diff, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const pairs = 20000;
    const pricePerPair = 1500;
    const totalPrice = multiply(pairs, pricePerPair)

    const lastShipment = 5400000;
    const currentShipment = totalPrice;
    const difference = diff(lastShipment, currentShipment)
    return (
        <div>
            <h2>This is shoes Component</h2>
            <h4>Total Price: {totalPrice}</h4>
            <h4>Difference in Last Two Sales: {difference}</h4>
        </div>
    );
};

export default Shoes; 