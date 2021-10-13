import React from 'react';

function Number({number, addOnClick}){
    return (
        <p className="Number" onClick={() => {
            addOnClick(number);
        }}>{number}</p>
    );
}


export default Number; 