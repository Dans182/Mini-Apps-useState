import React, { useState } from "react";

const initialProduct = {
  title: "Titulo",
  description: "Descripción",
};

//No es conveniente que initialproduct fuera un state objeto vacio. Despues podría dar inconvenientes al tratar de ingresar
//a valores, ya que pueden haber objetos en varios niveles
//product.image.medium probablemente sería inaccesible, entonces podría hacer esto:
//product.image?.medium -> de esta manera "pregunto" si medium existe, y me la coloca

const ProductApp = () => {
  const [product, setProduct] = useState(initialProduct);
  const updateProduct = (property, value) => {
    setProduct({
      ...product,
      [property]: value,
    });
  };

  return (
    <div>
      <button onClick={() => updateProduct("title", "Nuevo título")}>
        Update
      </button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>

      {/* <div>{product}</div> Esto no sirve porque en JSX no podemos imprimir objetos.  */}
      {/* Entonces, para poder imprimir objetos, o sea, JSON, tenemos que hacer como con los boolean, pasarlo a string */}
      {/* En este caso, JSON.stringify */}

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

//Tenemos dos formas de hacer lo mismo, arriba y abajo.
//Si al onClick no le hacemos un arrow function, react va a renderizar en loop infinito.
//si le hacer arrow, solo se ejecuta al hacer click.

// const ProductApp = () => {
//   const [product, setProduct] = useState(initialProduct);
//   const updateProduct = () => {
//     setProduct({
//         ...product,
//         title: "Otro título",
//     });
//   };

//   //Spread operator sirve para hacer una copia de los valores que tenía. Si uso la c, y hago lo que hice, me modifica el valor de mi
//   //title, y me mantiene el resto de keys y valores.
//   return (
//     <div>
//       <button onClick={updateProduct}>Update</button>
//       <h1>{product.title}</h1>
//       <h1>{product.description}</h1>
//     </div>
//   );
// };

export default ProductApp;
