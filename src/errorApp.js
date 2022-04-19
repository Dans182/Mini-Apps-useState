import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");

  return (
    <div>
      <button onClick={() => setError("Error al traer con la API")}>
        Error
      </button>

      <button onClick={() => setError("Credenciales incorrectas")}>
        Another error
      </button>

      <button onClick={() => setError("")}>Proceso exitoso</button>

      {error && <h1>{error}</h1>}
      {/* Si hay error, o la cadena de string está vacia, nos muestra dicho error, sino, no. */}
    </div>
  );
};

export default ErrorApp;
