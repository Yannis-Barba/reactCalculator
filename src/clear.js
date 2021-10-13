import React from 'react'

function Clear({operator, clearOnClick}){
    return (
        <p className="Operator" onClick={clearOnClick}>{operator}</p>
    );
}

export default Clear;