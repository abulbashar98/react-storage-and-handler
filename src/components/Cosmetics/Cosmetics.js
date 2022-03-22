import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/fake-database';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
// import { add, diff } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

/*--------------------------*\
  Part: 1      Es6 Modules
  \*--------------------------*/

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





/*------------------------------------*\
  Part: 2   Create and Load Fake Data
\*-------------------------------------*/




// case 1: create simple array of objects....


/*
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
*/





// Case 2: Generate Fake Data using JSON generator and Fetch from a created JSON file in Public Folder......


const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setCosmetics(data))
    }, [])


    const total = totalPrice(cosmetics);
    console.log(total);

    return (
        <div>
            <h1>Cosmetics Store, Bikrompur Plaza</h1>
            <p>Total price: {total}</p>

            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic}
                    key={cosmetic.id}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;




// Case 3: use mockApi, Beeceptor or fake API link and data Generators to fetch fake data....But the problem is you cannot request or Call the api more than 5 times a day unless you use premium subs...So we are going to use our own Case 2.....

/*
const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([])

    useEffect(() => {
        fetch('https://cosmetics.free.beeceptor.com')
            .then(response => response.json())
            .then(data => setCosmetics(data))
    }, [])


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
*/



