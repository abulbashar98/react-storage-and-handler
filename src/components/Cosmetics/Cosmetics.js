import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, diff } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

// Part 1: Es6 modules

/*
const Cosmetics = () => {
    const shipmentOne = 15000;
    const shipmentTwo = 25000;
    const total = add(shipmentOne, shipmentTwo)
    const difference = diff(shipmentOne, shipmentTwo)
    return (
        <div>
            <h1>Cosmetics Store, Bikrompur Plaza</h1>
            <h4>Total: {total}</h4>
            <h4>Difference: {difference}</h4>
        </div>
    );
};
*/


// Part 2: Create and Load Fake Data

// case 1: create simple array of objects....

const Cosmetics = () => {

    const cosmetics = [
        { name: 'lipstick', price: 600, id: 1 },
        { name: 'soap', price: 240, id: 2 },
        { name: 'shampoo', price: 1805, id: 3 },
        { name: 'eye-liner', price: 298, id: 4 },
        { name: 'face-wash', price: 380, id: 5 },
        { name: 'foundation', price: 540, id: 6 },
    ]

    return (
        <div>
            <h1>Cosmetics Store, Bikrompur Plaza</h1>

            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic}
                    key={cosmetic.id}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;