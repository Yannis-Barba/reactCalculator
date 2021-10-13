import React from 'react'

function Egal({operator, egalOnClick}){
    return (
        <p className="Operator" onClick={() => {
            egalOnClick();
        }}>{operator}</p>
    );
}

export default Egal;