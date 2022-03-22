import React from 'react';

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic
    return (
        <div>
            <h2>Buy This Product: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Product ID: {id}</h4>
        </div>
    );
};

export default Cosmetic;