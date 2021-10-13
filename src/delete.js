import React from 'react'

function Delete({operator, deleteOnClick}){
    return (
        <p className="Operator" onClick={() => {
            deleteOnClick();
        }}>{operator}</p>
    );
}

export default Delete;