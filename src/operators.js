import React from 'react';

function Operator({operator, addOnClick}){
    return (
        <p className="Operator" onClick={() => {
            addOnClick(operator);
        }}> {operator}</p>
    );
}

export default Operator; 