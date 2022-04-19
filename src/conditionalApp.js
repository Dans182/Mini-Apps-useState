import React, { useState } from "react";

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>Toggle</button>

      {/* {condition ? (
        <h1> Show message in true</h1>
      ) : (
        <h1>Another message in false</h1>
      )} */}

      {condition ? <h1>Show message only in true</h1> : null}

      {/* {condition && <h1>Show message only in true</h1>} */}
{/* De esta manera, si me arroja verdadero, me muestra el texto. sino, no muestra nada.
Esta manera se usa cuando no tengo un else que declarar. Aca analiza si es diferente de false, null, undefined o string vacio. Si no 
ninguno de los casos, me imprime*/}


      <h1>State value is {condition.toString()}</h1> 
      
      {/* De esta manera imprimimos en pantalla un valor boolean. Estos no se imprimen 
      como otros casos */}


      <h1>ConditionalApp</h1>
    </div>
  );
};

export default ConditionalApp;
