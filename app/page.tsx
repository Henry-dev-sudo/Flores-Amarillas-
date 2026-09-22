"use client";
// "use client" es necesario porque este archivo usa estado (useState)
// para que el botón y las flores reaccionen a los clicks del usuario.

import { useState } from "react";
import Flower from "./components/Flower";
import Ribbon from "./components/Ribbon";

// PASO 20 + PASO 21: Personalizar colores y agregar más flores
// Cada objeto es un girasol del ramo: su color y el ángulo con el
// que se inclina para formar el efecto de abanico.
// Para agregar más flores, solo agrega otra línea aquí.
const girasoles = [
  { color: "#f7c948", angulo: "-18deg" },
  { color: "#ffd166", angulo: "-10deg" },
  { color: "#f9b233", angulo: "-3deg" },
  { color: "#ffdd57", angulo: "4deg" },
  { color: "#f4a340", angulo: "11deg" },
  { color: "#eebd4b", angulo: "18deg" },
];

export default function Home() {
  // PASO 19: Agregar un botón para mostrar un mensaje
  const [mensajeVisible, setMensajeVisible] = useState(false);

  // PASO 23: Interactividad (click) — qué girasol está seleccionado
  const [seleccionada, setSeleccionada] = useState<number | null>(null);

  return (
    <main>
      <h1>Flores Amarillas 🌻</h1>
      <p>Para ti que eres una persona Increible 💛</p>

      {/* PASO 19: Botón que muestra/oculta el mensaje */}
      <button className="boton-mensaje" onClick={() => setMensajeVisible(!mensajeVisible)}>
        {mensajeVisible ? "Ocultar mensaje" : "Mostrar mensaje"}
      </button>

      {mensajeVisible && (
        <p className="mensaje">
          Que nunca te falten motivos para sonreír por que eres una persona increíble.
        </p>
      )}

      {/* El ramo: contenedor con las flores y el listón que las amarra */}
      <div className="ramo">
        {girasoles.map((flor, index) => (
          <Flower
            key={index}
            color={flor.color}
            angulo={flor.angulo}
            seleccionada={seleccionada === index}
            onClick={() => setSeleccionada(index)}
          />
        ))}

        {/* El listón va DESPUÉS de las flores, para dibujarse encima de los tallos */}
        <Ribbon />
      </div>
    </main>
  );
}