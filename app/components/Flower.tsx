// Cada girasol recibe:
// - color: el tono de sus pétalos (PASO 20)
// - angulo: la inclinación para el efecto de abanico del ramo
// - seleccionada: si el usuario hizo click en esta flor (PASO 23)
// - onClick: qué pasa cuando la clickean (PASO 23)
type FlowerProps = {
  color: string;
  angulo: string;
  seleccionada: boolean;
  onClick: () => void;
};

export default function Flower({ color, angulo, seleccionada, onClick }: FlowerProps) {
  return (
    // Usamos <button> en vez de <div> para que la flor sea clickeable
    // y también funcione con el teclado (más accesible)
    <button
      type="button"
      className={`flower${seleccionada ? " flower-seleccionada" : ""}`}
      // Guardamos el color y el ángulo como variables CSS personalizadas,
      // así las podemos usar después en globals.css con var(--nombre)
      style={{ "--color-petalo": color, "--angulo-flor": angulo } as React.CSSProperties}
      onClick={onClick}
      aria-label="Girasol del ramo"
    >
      <div className="flower-head">
        {/* 8 pétalos, cada uno rotado 45 grados más que el anterior */}
        <div className="petal petal-1"></div>
        <div className="petal petal-2"></div>
        <div className="petal petal-3"></div>
        <div className="petal petal-4"></div>
        <div className="petal petal-5"></div>
        <div className="petal petal-6"></div>
        <div className="petal petal-7"></div>
        <div className="petal petal-8"></div>

        {/* Centro marrón característico del girasol */}
        <div className="flower-center"></div>
      </div>

      {/* Tallo que conecta la flor con el resto del ramo */}
      <div className="stem"></div>
    </button>
  );
}