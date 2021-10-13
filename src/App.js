import './App.css';
import React from 'react';
import Number from './numbers'
import Operator from './operators'
import Clear from './clear'
import Delete from './delete'
import Egal from './egal'

function App() {
  const [operation, setOperation] = React.useState('');

  function addOnClick(number){
    setOperation(operation+number);
  }

  function deleteOnClick(){
    setOperation(operation.slice(0,-1));
  }

  function clearOnClick(){
    setOperation('');
  }

  function egalOnClick(){
    setOperation(eval(operation));
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="Result">
          <p className="pResulat">{operation}</p>
        </div>
        <div className="Operators1">
          <Clear operator="C" clearOnClick={clearOnClick}/>
          <Operator operator="/" addOnClick={addOnClick}/>
          <Operator operator="*" addOnClick={addOnClick}/>
          <Delete operator="D" deleteOnClick={deleteOnClick}/>
        </div>
        <div className="Calculatrice">          
          <div className="Operators2">
          <Operator operator="-" addOnClick={addOnClick}/>
          <Operator operator="+" addOnClick={addOnClick}/>
          <Egal operator="=" egalOnClick={egalOnClick}/>

          </div>
          <div className="Numbers">
            <Number number="7" addOnClick={addOnClick}/>
            <Number number="8" addOnClick={addOnClick}/>
            <Number number="9" addOnClick={addOnClick}/>
            <Number number="4" addOnClick={addOnClick}/>
            <Number number="5" addOnClick={addOnClick}/>
            <Number number="6" addOnClick={addOnClick}/>
            <Number number="1" addOnClick={addOnClick}/>
            <Number number="2" addOnClick={addOnClick}/>
            <Number number="3" addOnClick={addOnClick}/>
            <Number number="0" addOnClick={addOnClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
