import { useState } from "react";
import "./styles.css";

const content = [
  [
    "Estoy aprendiendo React y modificando diferentes contenidos",
    "Este es uno de los primeros ejemplos",
    "Veo que es posible modificar el contenido de la web con React",
    "Pasemos a la siguiente sección",
  ],
  [
    "El segundo botón funciona correctamente",
    "Continuo mejorando y adaptandome al lenguaje",
    "Aún es pronto para sacar conclusiones, pero es un buen comienzo.",
    "Sigamos adelante",
  ],
  [
    "Todo funciona con normalidad",
    "Repito los mismos pasos y de momento sigo sin problemas.",
    "Me siento mejor y puedo seguir aprendiendo",
  ],
  [
    "Esto es una prueba del cuarto botón para comprobar que funciona",
    "Estoy aprendiendo React y modificando diferentes contenidos",
    "Con esto he conseguido dar el primer paso en este lenguaje",
    "Será un camino largo pero divertido, con ganas de seguir aprendiendo.",
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Primer paso
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Otro pasito
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Mas contenido
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Sigamos avanzando
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
